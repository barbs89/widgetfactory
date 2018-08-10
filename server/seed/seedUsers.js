require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { User } = require('../models/User')

const generateUsers = async () => {
  // 1. Generate the salt
  const salt = await bcrypt.genSalt(10)

  // 2. Create the hashed password
  const password = await bcrypt.hash('password', salt)

  // 3. Generate users
  const usersArray = [
    new User({
      email: 'steve@redrocks.com',
      password: password,
      accessKey: 'thisisnotanactualkey',
      admin: false,
      firstName: 'Steven',
      lastName: 'Salad',
      company: 'Really Good Build Co',
    }),
    new User({
      email: 'maggie@redrocks.com',
      password: password,
      accessKey: 'thisisnotanactualkey2',
      admin: false,
      firstName: 'Maggie',
      lastName: 'Margella',
      company: 'Really Good Build Co',
    }),
  ]

  // 4. Return users
  return usersArray
}

const dbURL = `${process.env.MONGO_URL}:${process.env.MONGO_PORT}/`
console.log(`MongoDB: ${dbURL}`) // Display the parsed URL in server logs

mongoose.connect(dbURL, { useNewUrlParser: true })
  .then(async () => {
    console.log('Mongo Connection established.')
    const users = await generateUsers()
    let done = 0
    for (let i = 0; i < users.length; i++) {
      users[i].save()
        .then(() => {
          done++
          if (done === users.length) {
            mongoose.disconnect()
          }
        })
        .catch(() => {
          console.log('Something went wrong')
        })
    }
  })
  .catch(error => {
    console.error('MONGO_CONNECT_ERROR: Have you started your mongodb?')
    console.log(`Error Details: ${error}`)
    process.exit() // Quits Server on Error
  })
