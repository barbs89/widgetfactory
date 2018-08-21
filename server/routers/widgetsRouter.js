const express = require('express');
const Widget = require('../models/Widget');
const fetchAdds = require('../db/api.js');

const widgetRoutes = express.Router();

const widgetsRouter = (widgetRoutes) => {
  widgetRoutes.get('/widgets', (req, res, next) => {
    fetchAdds()
      .then(({ data, status }) => {
        console.log('Hi there');
        console.log(data);
        res.status(status).json(data);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  });
};

module.exports = { widgetsRouter, widgetRoutes };
