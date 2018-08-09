const express = require('express')
const router = express.Router()

// place relevant controllers below:
const usersController = require('../controllers/usersController')

// POST /api/user/create:

router.route('/create')
  .post(usersController.createUser)

// .post(authorize, authManager, employeesController.createEmployee) // route > 'createEmployee' in 'employeesController'

module.exports = router
