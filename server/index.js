require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

// Setup Express Server //

const app = express();
const port = process.env.PORT || 5000;

// Middleware //
// app.use(express.json());
app.use(bodyParser.json());

// API routes

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
// app.get('/widget', (req, res) =>{
//   console.log(req.body)
// })


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = { app };
