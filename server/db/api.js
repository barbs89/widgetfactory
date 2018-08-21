require('dotenv').config();
const axios = require('axios');



// Axios request that interacts with MP API. The widgetsRouter calls this funciton and connects with the client side axios request. //

let id = 200357509
const images = '/images'
const imageAPI = process.env.API_IMAGE + id + images,

fetchAdds = () =>
  axios({
    url: process.env.API_URI,
    headers: {
      Authorization: `Bearer ${process.env.API}`
    }
  }).then(({ data, status }) => {
    id = data.data.id
    console.log(imageAPI)
    return { data, status };
  })
  .catch(err =>  console.log(err))
  

  fetchImages = () =>
    axios({
      url: imageAPI,
      headers: {
        Authorization: `Bearer ${process.env.API}`
      }
    }).then(({data, status}) => {
      return ({data, status})
    }).catch(err => console.log(err))


// const instance = axios.create({
//   baseURL: 'https://houseofhome.staging.marketplacer.com/api/v2/client/adverts',
//   timeout: 15000,
//   headers: {'Authorization': `Bearer ${process.env.API}`}
// })
// instance.get('/${:_id}', (req, res) => {
//   res.json({ _id: '200366973'})
//   console.log(res.json())

// })
  
module.exports = {fetchAdds,fetchImages } ;

