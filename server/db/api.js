require('dotenv').config();
const axios = require('axios');

// Axios request that interacts with MP API. The widgetsRouter calls this function and connects with the client side axios request. //

//TODO: ADJUST API VARIABLE TO A SINGULAR SEARCH AND SINGLE ENVIRONMENT VARIABLE 200357509
fetchAdds = () => 
  axios({
    url: process.env.API_URI,
    headers: {
      Authorization: `Bearer ${process.env.API}`
  }
    }).then(({ data, status }) => {
      return { data, status };
    })
    .catch(err =>  console.log(err))
  
    


 fetchImages = (id) => {
  const imageID = id
  const uri = process.env.API_IMAGE
  const images = "/images"
  const address = `${uri}${imageID}${images}`
  
    return axios({  
      url: address,
      headers: {
        Authorization: `Bearer ${process.env.API}`
      }
    })
    .then(({data, status}) => {
      return({data, status})
    })
    .catch(err => console.log(err))
  }
  
module.exports = {fetchAdds,fetchImages } ;
