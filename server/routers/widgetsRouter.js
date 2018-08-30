const { fetchAdds, fetchImages } = require('../db/api.js');
const axios = require('axios');

// The following function recieves two lots of data from the API (It pulls an advert and the adverts id, provides it to searchImages function to retrieve the corresponding images //

const searchImages = (advertList) => Promise.all(advertList.map(fetchImages))

const widgetRoutes = (app) => {
  app.get('/widgets', (req, res, next) => {
    return fetchAdds()
      .then(({ data }) => data.data.slice(0, 5))
      .then(searchImages)
      .then((ads) => res.json(ads))
      .catch(() => res.status(500))
  })
}

        
module.exports = widgetRoutes;





