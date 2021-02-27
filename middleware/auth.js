const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  let token;

  // Get token from header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, config.get("JWT_SECRET"));

      req.user = decoded.user;
      next();
    } catch (error) {
      res.status(401).json({ message: "Token is not valid" });
    }
  }

  // Check if not token
  if (!token) {
    res.status(401).json({ message: "No Token, authorization denied" });
  }
};
