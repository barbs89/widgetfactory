const { User } = require('./../models/User');

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(' ')[1];

  try {
    const user = await User.findByToken(authToken);
    req.user = user;
    req.token = authToken;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send({ error: error.message });
  }
};

module.exports = { authenticate };
