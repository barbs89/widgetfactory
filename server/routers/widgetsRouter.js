const { fetchAdds, fetchImages } = require('../db/api.js');
const axios = require('axios');

// The following function recieves two lots of data from the API (1. an advert and 2. an image to that)
const widgetRoutes = (app) => {
  app.get('/widgets', (req, res, next) => {
    axios
      .all([fetchAdds(), fetchImages()])
      .then(
        axios.spread(function(adds, images) {
          res.json({
            adverts: adds,
            images: images
          });
        })
      )
      .catch((err) => console.log(err.message));
  });
};

module.exports = widgetRoutes;
