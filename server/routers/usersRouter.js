const express = require('express')
const usersRouter = express.Router()

// place relevant controllers

// const usersController = require('../controllers/usersController')

// Place relevant routes

usersRouter.get('/user', (req, res) => {
  res.send('hello form the users page')
})


module.exports = usersRouter
