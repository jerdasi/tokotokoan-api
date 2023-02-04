const jwt = require('jsonwebtoken');
const { privateKey } = require('../../config/private.key');
const User = require('./user.model');

exports.users = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: res.statusCode,
      message: 'get users sucsess',
      data: { users: users },
    });
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: error.message,
    });
  }
};

exports.user = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({
      email: email,
    });
    res.status(200).json({
      status: res.statusCode,
      message: 'get user success',
      data: {
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
          profil: user.profil,
        },
      },
    });
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: error.message,
    });
  }
};

exports.register = async (req, res) => {
  try {
    const { email, password, role, profil } = req.body;

    const checkEmail = await User.findOne({
      email: email,
    });

    if (checkEmail) {
      return res.status(400).json({
        status: res.statusCode,
        message: 'email already exist',
      });
    }

    const newUser = new User({
      role: role,
      email: email,
      password: password,
      profil: profil,
    });
    await newUser.save();
    res.status(200).json({
      status: res.statusCode,
      message: 'user register success',
      data: {
        user: {
          email: email,
        },
      },
    });
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email,
    }).select('+password');

    console.log(user);

    if (!user) {
      return res.status(400).json({
        status: res.statusCode,
        message: 'account not register',
      });
    }
    if (user.password !== password) {
      return res.status(400).json({
        status: res.statusCode,
        message: 'wrong email or password',
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
        profil: user.profil,
      },
      privateKey
    );

    res.status(201).json({
      status: res.statusCode,
      message: 'login succsess',
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: error.message,
    });
  }
};
