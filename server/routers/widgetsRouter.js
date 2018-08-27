const { fetchAdds, fetchImages } = require('../db/api.js');
const axios = require('axios');

// The following function recieves two lots of data from the API (1. an advert and 2. an image to that)



// const widgetRoutes = (app) => {
//   var id = 200357509
//       app.get('/widgets', (req, res, next) =>{
//         axios
//         .all([fetchAdds(), fetchImages(id)])
//         .then(
//           axios.spread(function(adds,images){
//           res.json({
//             adverts: adds,
//             images: images
//           });
//           console.log(images)
//       })
//       ).catch(err => console.log(err.message));
//         })
//       }

// const widgetRoutes = (app) => {
//   var id 
//       app.get('/widgets', (req, res, next) =>{
//         axios.get(fetchAdds())
//          .then(res => {
//            var id  =  res.data.adverts.data.data.id

//            return id
//          })
//          .catch(error => console.log(error.message))
//         axios.all([fetchAdds(), fetchImages(id)])
//         .then(axios.spread(function(adds,images){
//           res.json({
//             adverts: adds,
//             images: images
//           })
//       })
//       ).catch(err => console.log(err.message));
//         })
//         return id
//       }

// const getID = () => {
//   axios.get(fetchAdds())
//   .then(response => {
//     const pass = response
//     console.log(`=> GETID: ${pass.adverts}`)
//     return pass
//   }).catch(err => console.log(err))
// }


const widgetRoutes = (app) => {
      app.get('/widgets', (req, res, next) =>{
        axios.all([fetchAdds(), fetchImages()])
        .then(axios.spread(function(adds,images){
          res.json({
            adverts: adds,
            images: images
          })
      })
      ).catch(err => console.log(err.message));
        })
      }

// get = () =>{
//   axios.get('https://houseofhome.staging.marketplacer.com/api/v2/client/adverts/200357509')
//     .then(response =>{
//       const id = response
//       console.log(`GET FUNCTION: ${id}`)
//       return id
//     }).catch(err => console.log(err))
// }

//       const widgetRoutes = (app) => {
//        const id = get()
//        console.log(`WR FUNCTION: ${id}`)
//         app.get('/widgets', (req, res, next) => {
//           axios
//             .all([fetchAdds(), fetchImages()])
//             .then(
//               axios.spread(function(adds, images) {
//                 console.log(res.data)
//                 res.json({
//                   adverts: adds,
//                   images: images
//                 });
//               })
//             )
//             .catch((err) => console.log(err.message));
//         });
//       };
      

module.exports = widgetRoutes;

// const widgetRoutes = (app) => {
  //     app.get('/widgets', (req, res, next) =>{
  //       axios.all([fetchAdds(), fetchImages()])
  //       .then(axios.spread(function(adds,images){
  //         res.json({
  //           adverts: adds,
  //           images: images
  //         })
  //     })
  //     ).catch(err => console.log(err.message));
  //       })
  //     }


  // const widgetRoutes = (app) => { 
  //   app.get('/widgets', (req, res, next) =>{
  //     axios.all([fetchAdds(), fetchImages()])
  //     .then(axios.spread(function(adds,images){
  //       console.log(`Widgets Router response: ${res}`) 
        
  //       res.json({
  //         adverts: adds,
  //         images: images
  //       })
  //       console.log(`Widgets Router: ${adds}`)
  //   })
  //   ).catch(err => console.log(err.message))
  //     })
  //   }
   
