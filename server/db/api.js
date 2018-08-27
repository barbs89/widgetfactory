require('dotenv').config();
const axios = require('axios');



// Axios request that interacts with MP API. The widgetsRouter calls this funciton and connects with the client side axios request. //


fetchAdds = () => 
  axios({
    url: process.env.API_URI,
    headers: {
      Authorization: `Bearer ${process.env.API}`
  }
    }).then(({ data, status }) => {
      console.log(`=> API CALL adverts data:${data.data.type}`)
      return { data, status };
    })
    .catch(err =>  console.log(err))
  
    


 fetchImages = () => 
     axios({
      url: process.env.API_IMAGE,
      headers: {
        Authorization: `Bearer ${process.env.API}`
      }
    }).then(({data, status}) => {
      console.log(`=> API CALL Images Data: ${data.data[0].type}`);
      return({data, status})
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






// fetchAdds = () =>
// axios({
//   url: process.env.API_URI,
//   headers: {
//     Authorization: `Bearer ${process.env.API}`
//   }
// }).then(({ data, status }) => {
//   return { data, status };
// })
// .catch(err =>  console.log(err))

// fetchImages = () =>
//     axios({
//       url: process.env.API_IMAGE,
//       headers: {
//         Authorization: `Bearer ${process.env.API}`
//       }
//     }).then(({data, status}) => {
//       return ({data, status})
//     }).catch(err => console.log(err))

// fetchImages = async function() {
//      await axios({
//       url: process.env.API_IMAGE,
//       headers: {
//         Authorization: `Bearer ${process.env.API}`
//       }
//     }).then(({data, status}) => {
//       console.log(process.env.API_IMAGE)
//       return ({data, status})
//     }).catch(err => console.log(err))
//   } 