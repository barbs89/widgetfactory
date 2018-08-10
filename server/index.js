require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

// Setup Express Server //

const app = express()
let dbURL = `${process.env.MONGO_URL}:${process.env.MONGO_PORT}`

// Mongoose connect to DB //

mongoose.connect(dbURL, { useNewUrlParser: true })
  .then(() => {
    console.log(dbURL)
    console.log('Mongo Connection established.')
    // runSeeder() // Seed data
  })
  .catch(error => {
    console.error('MONGO_CONNECT_ERROR: Have you started your mongodb?')
    console.log(`Error Details: ${error}`)
    process.exit() // Quits Server on Error
  })

// Middleware

app.use(express.json())

// Import routers //

const { homeRouter } = require('./routers/homeRouter')
// const { widgetsRouter } = require('./routers/widgetsRouter')
// const { usersRouter } = require('./routers/usersRouter')

// Set base outes //

app.use('/api/', homeRouter)
// app.use('/api/user', usersRouter)
// app.use('/api/widget', widgetsRouter)

module.exports = { app }
