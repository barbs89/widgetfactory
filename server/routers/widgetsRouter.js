const { fetchAdds, fetchImages } = require('../db/api.js');
const axios = require('axios');

// The following function recieves two lots of data from the API (It pulls an advert and the adverts id, provides it to fetchImages function to retrieve the corresponding image //

const widgetRoutes = (app) => {

      app.get('/widgets', (req, res, next) =>{
        fetchAdds()
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
      })
}

module.exports = widgetRoutes;
