/* eslint-disable no-undef */
/**
 * @module backend/utils/mailing
 * @requires nodemailer
 * @requires dotenv
 * @description Defines a function that sends an email using the provided details.
 */

import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

/**
 * Sends an email using the provided details.
 *
 * @param {Object} options - An object containing the email details.
 * @param {string} options.from - The email address of the sender.
 * @param {string} options.to - The email address of the recipient.
 * @param {string} options.subject - The subject of the email.
 * @param {string} options.text - The body of the email.
 * @return {Promise} A Promise that resolves when the email is sent successfully.
 */
export const sendingMail = async ({ from, to, subject, text }) => {
  try {
    const mailOptions = {
      from,
      to,
      subject,
      text,
    };

    const transport = nodemailer.createTransport({
      host: process.env.MAIL_SERVICE || "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    return await transport.sendMail(mailOptions);
  } catch (error) {
    throw new Error(error.message);
  }
};
