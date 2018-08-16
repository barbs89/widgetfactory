const express = require('express')
const widgetsRouter = express.Router()
const fetchAdds = require('./db/api.js')
const Widget = require('./models/Widget.js')

// place relevant controllers

// Place relevant routes
widgetsRouter.get('/widgets', (req, res, next) => {
  Widget.fetchAdds()  
  .then(widgets => {
    res.status(200).json(widgets)
  })
  .catch(() => {
    res.status(500).json(err.message)
  })
})



module.exports = { widgetsRouter }


  // widgetsRouter.get('/widget', (req, res, next) => {
  //   Widget.find()
  //   .then(widgets => {
  //     res.status(200).json(widgets)
  //   })
  //   .catch(() => {
  //     res.status(500).json(err.message)
  //   })
  // })