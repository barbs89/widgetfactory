const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// place relevant controllers
router.get('/user', (req, res) => {
  res.send('hello form the users page');
  res.status(200).json(users);
  console.log('hello from the users');
});

router.post('/signup', function(req, res) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: hash
      });
      user
        .save()
        .then(function(result) {
          console.log(result);
          res.status(200).json({
            success: 'New user has been created'
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: err
          });
        });
    }
  });
});

// usersRouter.get('/user', (req, res) => {
//   User.find().then((users) => {
//     res.status(200).json(users);
//   });
// });
// const usersController = require('../controllers/usersController')
// usersRouter.post('/register', function(req, res) {
//   bcrypt.hash(req.body.password, 10, function(err, hash) {
//     if (err) {
//       return res.status(500).json({
//         error: err
//       });
//     } else {
//       const user = new User({
//         _id: new mongoose.Types.ObjectId(),
//         email: req.body.email,
//         password: hash
//       });
//       user
//         .save()
//         .then(function(result) {
//           console.log(result);
//           res.status(200).json({
//             success: 'New user has been created'
//           });
//         })
//         .catch((error) => {
//           res.status(500).json({
//             error: err
//           });
//         });
//     }
//   });
// });
// // Place relevant routes

// usersRouter.patch('/:id', (req, res) => {
//   User.findByIdAndUpdate({ id: id }),
//     req.body,
//     { new: true },
//     function(err, user) {
//       if (err) return res.status(500).send(err);
//       return res.json(user);
//     };
// });

// usersRouter.delete('/:id', (req, res) => {
//   const id = req.body.params;

//   user.findByIdAndRemove(id, function(err, user) {
//     if (err) {
//       throw err;
//     } else {
//       res.status(204).json({
//         deleted: true
//       });
//     }
//   });
// });

module.exports = router;
