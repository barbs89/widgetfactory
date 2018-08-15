require('dotenv').config()
const axios = require('axios')

 axios({
  url: process.env.API_URI,
    headers: {'Authorization': `Bearer ${process.env.API}`,
  }
    })
    .then(response =>   {
       data = response.data.data
      console.log(data)
      
    })
    .catch(error => console.log(error.message))
  
  


module.exports = { axios }