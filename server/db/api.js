require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const axios = require('axios')

var app = express()
app.use(bodyParser.json())

  axios({
  url: process.env.API_URI,
    headers: {'Authorization': `Bearer ${process.env.API}`,
  }
    })
    .then(response =>   {
       data = response.data
      console.log(data.data[0].attributes)
      
    })
    .catch(error => console.log(error.message))
  



module.exports = { axios }