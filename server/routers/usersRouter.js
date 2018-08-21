const express = require('express');
const usersRouter = express.Router();

// place relevant controllers

// const usersController = require('../controllers/usersController')

// Place relevant routes

usersRouter.get('/user', (req, res) => {
  res.send('hello form the users page');
});

usersRouter.get('/user', (req, res) => {
  User.find().then((users) => {
    res.status(200).json(users);
  });
});

usersRouter.post('/new', (req, res) => {
  const User = new User(req.body);

  user
    .save()
    .then(() => {
      res.status(201).json(user);
    })
    .catch(() => {
      res.status(500).json(err.message);
    });
});

usersRouter.patch('/:id', (req, res) => {
  User.findByIdAndUpdate({ id: id }),
    req.body,
    { new: true },
    function(err, user) {
      if (err) return res.status(500).send(err);
      return res.json(user);
    };
});

usersRouter.delete('/:id', (req, res) => {
  const id = req.body.params;

  user.findByIdAndRemove(id, function(err, user) {
    if (err) {
      throw err;
    } else {
      res.status(204).json({
        deleted: true
      });
    }
  });
});

module.exports = { usersRouter };
