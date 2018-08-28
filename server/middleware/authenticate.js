const { User } = require('./../models/User');

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const authTokens = authHeader.split(' ')[1];

  try {
    const user = await User.findByToken(authTokens);
    req.user = user;
    req.token = authTokens;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send({ error: error.message });
  }
};

module.exports = { authenticate };
