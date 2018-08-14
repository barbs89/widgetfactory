require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const axios = require('axios')

const fetchAdverts = axios({
  url: process.env.API_URI,
  headers: {'Authorization': `Bearer ${process.env.API}`}
})
.then(response => console.log(response))
.catch(error => console.log(error.message))

const data = fetchAdverts

module.exports = { fetchAdverts }