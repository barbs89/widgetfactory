require('dotenv').config();
const { ObjectId } = require('mongoose').Types;

const { mongoose } = require('../mongoose');
const { User } = require('../../models/User');

const clientId = new ObjectId();
// const userTwoId = new ObjectId();
const users = [
  {
    _id: clientId,
    email: 'anastasiabwidget@gmail.com',
    password: process.env.CLIENT_PASSWORD
    // authTokens: [jwt.sign({ _id: clientID }, process.env.JWT_SECRET).toString()]
  },
  {
    email: 'testingwidget2@email.com',
    password: process.env.CLIENT_PASSWORD
    // authTokens: [
    //   jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET).toString()
    // ]
  }
];

const populateConnectedUsers = async () => {
  try {
    await User.remove({});
    const newUsers = await User.create(users);
    console.log(newUsers);
    return Promise.resolve(newUsers);
  } catch (error) {
    console.log(error);
    return Promise.reject(newUsers);
  }
};

populateConnectedUsers();
