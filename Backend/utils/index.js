/* eslint-disable no-undef */
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

/**
 * Generate JWT access and refresh tokens.
 * @param {string} userId - The user ID.
 * @param {string[]} roles - The roles of the user.
 * @returns {Object} - The generated access and refresh tokens.
 */
export function generateTokens(userId, roles) {
  // Generate access token
  const accessToken = jwt.sign(
    { userId, roles },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );

  // Generate refresh token
  const refreshToken = jwt.sign(
    { userId, roles },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
}

/**
 * Send an email using Nodemailer.
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The email subject.
 * @param {string} text - The email content as plain text.
 * @returns {Promise} - A promise that resolves when the email is sent successfully.
 */
export function sendEmail(to, subject, text) {
  // Configure the transporter options (e.g., SMTP server, credentials)
  const transporterOptions = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport(transporterOptions);

  // Define the email options
  const mailOptions = {
    from: process.env.EMAIL_SENDER,
    to,
    subject,
    text,
  };

  // Send the email
  return transporter.sendMail(mailOptions);
}

/**
 * Verifies a refresh token.
 *
 * @param {string} token - The refresh token to be verified.
 * @return {object} An object containing a success flag and the decoded token data, or an error message if verification fails.
 */
export function verifyAccessToken(token) {
  const secret = process.env.ACCESS_TOKEN_SECRET;

  try {
    const decoded = jwt.verify(token, secret);
    return { success: true, data: decoded };
  } catch (error) {
    return { success: false, error: "You are not authorized" };
  }
}
