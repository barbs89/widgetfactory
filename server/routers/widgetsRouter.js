const express = require('express')
const Widget = require('../models/Widget')
const fetchAdds = require('../db/api.js')

// place relevant controllers

// Place relevant routes
const widgetRoutes = (app) => {
  app.get('/widgets', (req, res, next) => {
    fetchAdds()
    .then(({ data, status }) => {
      res.status(status).json(data)
    })
    .catch((err) => {
      res.status(500).json(err.message)
    })
  })
}




module.exports = widgetRoutes
