require('dotenv').config();
const express = require('express');
const path = require('path');
const nocache = require('nocache');

const bodyParser = require('body-parser');
const cors = require('cors');

const { homeRouter } = require('./routers/homeRouter');
const user = require('./routers/usersRouter');
// const user = require('./routers/usersRouter');
const { widgetsRouter } = require('./routers/widgetsRouter');

// const widgetRoutes = require('./routers/widgetsRouter.js');

// Setup Express Server //

const app = express();
const port = process.env.PORT || 5000;
// const API_DIR = process.env.API_URI;
// homeRouter(app);
widgetsRouter(app);

// Middleware //
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(nocache());

app.use(cors());

//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
// app.use(function(req, res, next) {
//  res.setHeader(`Access-Control-Allow-Origin, `*`);
//  res.setHeader(`Access-Control-Allow-Credentials`, `true`);
//  res.setHeader(‘Access-Control-Allow-Methods’, ‘GET,HEAD,OPTIONS,POST,PUT,DELETE’);
//  res.setHeader(‘Access-Control-Allow-Headers’, ‘Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers’);
// //and remove cacheing so we get the most recent comments
//  res.setHeader(‘Cache-Control’, ‘no-cache’);
//  next();
// });

// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     ('Access-Control-Allow-Credentials', 'true'),
//     ('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE'),
//     ('Access-Control-Allow-Headers',
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers')
//   );
//   res.setHeader('Cache-Control’, ‘no-cache');
//   next();
// });

// API routes
app.use('/', homeRouter);
// app.use('/login', usersRouter);
app.use('/user', user);

// app.use('/register');
app.use('/widgets', widgetsRouter);
// widgetsRouter(app);

app.get('/api/hello', (req, res, next) => {
  res.send({ express: 'Hello From Express' });
});

app.all('*', (req, response) => {
  console.log('Returning a 404 from the catch-all route');
  return response.sendStatus(404);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = { app };
