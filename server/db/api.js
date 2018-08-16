require('dotenv').config()
const axios = require('axios')

fetchAdds = () => axios({
  url: process.env.API_URI,
    headers: {'Authorization': `Bearer ${process.env.API}`,
  }
    })
    .then(({ data, status }) =>   {
      return {data, status}
    })

// const instance = axios.create({
//   baseURL: 'https://houseofhome.staging.marketplacer.com/api/v2/client/adverts',
//   timeout: 15000,
//   headers: {'Authorization': `Bearer ${process.env.API}`}
// })


// instance.get('/${:_id}', (req, res) => {
//   res.json({ _id: '200366973'})
//   console.log(res.json())
  
// })

module.exports = fetchAdds