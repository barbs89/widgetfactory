const express = require('express');
const homeRouter = express.Router();

// place relevant controllers below
// const usersController = require('../controllers/usersController')

// Place relevant routes
homeRouter.get('/', (req, res) => {
  res.send('hello form the users root page');
  console.log('hello from root page');
});

module.exports = { homeRouter };
