const express = require('express');
const homeRouter = express.Router();

// place relevant controllers below
// const usersController = require('../controllers/usersController')
const homeRoute = (homeRouter) => {
  // Place relevant routes
  homeRouter.get('/', (req, res) => {
    res.send('hello form the users root page');
    console.log('hello from root page');
  });
};
module.exports = { homeRouter, homeRoute };
