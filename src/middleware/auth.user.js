const jwt = require("jsonwebtoken");
const { privateKey } = require("../config/private.key");

const userVerification = async (req, res, next) => {
  const authHeader = req.headers["Authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(400).json({
      status: res.statusCode,
      message: "access denied",
    });
  }
  try {
    const verify = jwt.verify(token, privateKey);
    req.user = verify;
    next();
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: "Token Not Valid",
    });
  }
};

module.exports = userVerification;
