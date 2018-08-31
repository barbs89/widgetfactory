require('dotenv').config();
const express = require('express');
const path = require('path');
// const nocache = require('nocache');

// const bodyParser = require('body-parser');
const cors = require('cors');

const { homeRouter, homeRoute } = require('./routers/homeRouter');
const { userRoutes, usersRouter } = require('./routers/usersRouter');
// const user = require('./routers/usersRouter');
const widgetRoutes = require('./routers/widgetsRouter');

// const widgetRoutes = require('./routers/widgetsRouter.js');

// Setup Express Server //

const app = express();
const port = process.env.PORT || 5000;
// const API_DIR = process.env.API_URI;
// homeRouter(app);

// Middleware //
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
// app.use(nocache());

app.use(cors());
homeRoute(app);
userRoutes(app);
widgetRoutes(app);

// API routes
app.use('/', homeRouter);
// app.use('/login', usersRouter);
app.use('/users', usersRouter);

// app.use('/register');
app.use('/widgets', widgetRoutes);
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
