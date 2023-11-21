import { verifyAccessToken } from "../utils";

/**
 * Checks if the provided data is valid.
 *
 * @param {any} data - The data to be checked.
 * @return {boolean} True if the data is valid, false otherwise.
 */
const isValidData = (data) => {
  if (!data) {
    return false;
  }
  if (!data.userId || !data.roles) {
    return false;
  }
  return true;
};

/**
 * Verify the token from the request header and assign the decoded user to the request object.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @return {void} No return value.
 */
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ error: "Invalid authorization header format" });
  }
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access token not found" });
  }

  try {
    const result = verifyAccessToken(token);
    if (!result.success) {
      return res.status(401).json({ error: result.error });
    }
    if (isValidData(result.data)) {
      req.user = result.data;
      next();
    } else {
      return res.status(403).json({ error: "Invalid data" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

export default verifyToken;
