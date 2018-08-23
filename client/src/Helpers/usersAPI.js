import axios from 'axios';

const createUser = async (email, password) => {
  try {
    const res = await axios.post('/users/', {
      email,
      password
    });
    const { user } = res.data;
    const authToken = res.headers.authorization.split(' ')[1];
    return { user, authToken };
  } catch (error) {
    return Promise.reject(error.response.data.error.split(': ')[2]);
  }
};

const loginUser = async (email, password) => {
  const res = await axios.post('/users/login', { email, password });
  const { user } = res.data;
  const authToken = res.headers.authorization.split(' ')[1];
  return { user, authToken };
};

const getUser = async (authToken) => {
  const res = await axios.get('/users/me', {
    headers: { authorization: `Bearer ${authToken}` }
  });
  const { user } = res.data;
  return { user };
};

const logoutUser = async (authToken) => {
  await axios.delete('/users/logout', {
    headers: { authorization: `Bearer ${authToken}` }
  });
  return;
};

export default { createUser, loginUser, getUser, logoutUser };
