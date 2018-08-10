require('dotenv').config()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const jwt = require('jsonwebtoken')

const UserSchema = new Schema({
  email: String,
  password: String,
  accessKey: String,
  admin: Boolean,
  firstName: String,
  lastName: String,
  company: String,
})

const User = mongoose.model('User', UserSchema)

module.exports = {
  User
}