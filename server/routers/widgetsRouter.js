const { fetchAdds, fetchImages } = require('../db/api.js');


// Place relevant routes

// Connects App.js(Client side) with fetchAdds in api.js(Server side). //
// const widgetRoutes = (app) => {
//   app.get('/widgets', (req, res, next) => {
//     fetchAdds()
//       .then(({ data, status }) => {
//         console.log('Hi there');
//         console.log(data.data.id);
//         res.status(status).json(data);
//       })
//       .catch((err) => {
//         res.status(500).json(err.message);
//       });
//   });
// };


// The following function recieves two lots of data from the API (1. an advert and 2. an image to that advert)
const widgetRoutes = (app) => {
  app.get('/widgets', (req, res, next) => {
    fetchAdds()
    .then(({data, status}) => {
      res.status(status).json(data)
      return {data}
    }).catch((err) => {
      res.json(err.message)
    })                                                     
    fetchImages()
    .then(({data, status}) => {
      res.status(status).json(data)
      return {status}
    }).catch((err) => {
      res.json(err.message)
    })
  })
}




module.exports = widgetRoutes;
