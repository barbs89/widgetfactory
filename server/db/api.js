require('dotenv').config()
const express = require('express')
const axios = require('axios')

axios({
  url: process.env.API_URI,
  headers: {'Authorization': `Bearer ${process.env.API_KEY}`}
})
.then(response => console.log(response.data))
.then(response => response.send(response))
.catch(error => console.log(error.message))



