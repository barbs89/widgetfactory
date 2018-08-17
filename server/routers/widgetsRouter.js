const express = require('express');
const Widget = require('../models/Widget');
const fetchAdds = require('../db/api.js');

// Place relevant routes

// Connects App.js(Client side) with fetchAdds in api.js(Server side). //
const widgetRoutes = (app) => {
  app.get('/widgets', (req, res, next) => {
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

module.exports = widgetRoutes;
