require('dotenv').config();
const express = require('express');
const path = require('path');

const { mongoose } = require('./db/mongoose');

// Setup Express Server //

const app = express();
const port = process.env.PORT || 3001;

// Middleware //
app.use(express.json());

// API routes
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
// mongoose
//   .connect(
//     port,
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     console.log(dbURL);
//     console.log('Mongo Connection established.');
//     // runSeeder() // Seed data
//   })
//   .catch((error) => {
//     console.error('MONGO_CONNECT_ERROR: Have you started your mongodb?');
//     console.log(`Error Details: ${error}`);
//     process.exit(); // Quits Server on Error
//   });

// Import routers //

const { homeRouter } = require('./routers/homeRouter');
// const { widgetsRouter } = require('./routers/widgetsRouter')
// const { usersRouter } = require('./routers/usersRouter')

// Set base outes //

app.use('/api', homeRouter);
// app.use('/api/user', usersRouter)
// app.use('/api/widget', widgetsRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = { app };
