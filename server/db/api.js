require('dotenv').config()
const axios = require('axios')
const widgetsRouter = require('../routers/widgetsRouter.js')


const instance = axios.create({
  baseURL: 'https://houseofhome.staging.marketplacer.com/api/v2/client/adverts',
  timeout: 15000,
  headers: {'Authorization': `Bearer ${process.env.API}`}
})


// instance.get('/${:_id}', (req, res) => {
//   res.json({ _id: '200366973'})
//   console.log(res.json())
  
// })


// function get(url) {
//   return new Promise((resolve, reject) => {
//     instance(url)
//     .then(res => res.json())
//     .then(data => resolve(data))›
//     .catch(err => reject(err))
//   }
// )}

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
  
  
  


module.exports = axios