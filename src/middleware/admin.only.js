const User = require("../modules/users/user.model");
const adminVerification = async (req, res, next) => {
  try {
    const { role } = req.user;
    if (role !== "admin") {
      return res.status(400).json({
        status: res.statusCode,
        message: "access denied",
      });
    }
    next();
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: error.message,
    });
  }
};

module.exports = adminVerification;
