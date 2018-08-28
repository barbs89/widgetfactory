const { fetchAdds, fetchImages } = require('../db/api.js');
const axios = require('axios');

// The following function recieves two lots of data from the API (It pulls an advert and the adverts id, provides it to fetchImages function to retrieve the corresponding image //

const widgetRoutes = (app) => {
  
  app.get('/widgets', (req, res, next) =>{
    axios.all([fetchAdds(), fetchImages()])
      return fetchAdds()
        .then(function(response) {
          return axios.all([fetchAdds(), fetchImages(response.data.data.id)])
        })
          .then(axios.spread(function(adds,images){
            res.json({
              adverts: adds,
              images: images
            })
          })
          ).catch(err => console.log(err.message));
      }
    )
  }
      
module.exports = widgetRoutes;

//*Original Function to retrieve one add/image *//
// app.get('/widgets', (req, res, next) =>{
//   axios.all([fetchAdds(), fetchImages()])
// return fetchAdds()
//     .then(function(response) {
//       return axios.all([fetchAdds(), fetchImages(response.data.data.id)])
//     })
//       .then(axios.spread(function(adds,images){
//         res.json({
//           adverts: adds,
//           images: images
//         })
//       })
//       ).catch(err => console.log(err.message));
//     }
//   )


//**  Second Attempt **/
  // advertList = []
  // fetchAdds()
  //   .then(function(response) {
  //     const adds  = response
  //     const adverts = adds.slice(0,5)
  //     console.log(adds)
  //     console.log(adverts)
  //   })