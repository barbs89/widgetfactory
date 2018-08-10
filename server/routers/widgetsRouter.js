const express = require('express')
const widgetsRouter = express.Router()

// place relevant controllers

// Place relevant routes
widgetsRouter.get('/widget', (req, res) => {
  res.send('hello form the widgets page')
})

module.exports = widgetsRouter
