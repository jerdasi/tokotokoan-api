const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  profil: {
    full_name: {
      type: String,
      require: true,
    },
    address: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['P', 'L'],
    },
    description: {
      type: String,
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
