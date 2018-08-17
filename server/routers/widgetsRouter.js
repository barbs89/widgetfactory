const express = require('express');
const widgetsRouter = express.Router();

// place relevant controllers

// Place relevant routes
widgetsRouter.get('/widget', (req, res, next) => {
  Widget.find()
    .then((widgets) => {
      res.status(200).json(widgets);
    })
    .catch(() => {
      res.status(500).json(err.message);
    });
});

module.exports = { widgetsRouter };
