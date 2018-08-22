require('dotenv').config();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, minlength: 3, required: true },
  password: { type: String, minlength: 6, required: true }
});

module.exports = mongoose.model('User', user);
