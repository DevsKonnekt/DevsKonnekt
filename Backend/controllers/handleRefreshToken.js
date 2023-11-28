import { generateTokens, verifyRefreshToken } from "../utils/index.js";

/**
 * Handles the refresh token for authentication.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Object} The updated access token.
 */
export default function handleRefreshToken(req, res, next) {
  try {
    if (!req || !req.cookies || !req.cookies.refreshToken)
      return res.status(401).json({ error: "Unauthorized" });
    const refreshToken = req.cookies.refreshToken;

    const result = verifyRefreshToken(refreshToken);

    if (!result.success) {
      res.clearCookie("refreshToken"); // Clear the refreshToken cookie
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { accessToken, newRefreshToken } = generateTokens(result.user._id, result.user.email, result.user?.roles);
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    }); // Set HTTP Only flag for refreshToken cookie

    return res.json({ accessToken });
  } catch (error) {
    next(error);
  }
}
