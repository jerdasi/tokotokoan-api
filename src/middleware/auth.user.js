const jwt = require("jsonwebtoken");
const { privateKey } = require("../config/private.key");

const userVerification = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("halo");

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
      message: "token not valid",
    });
  }
};

module.exports = userVerification;
