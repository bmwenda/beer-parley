import axios from 'axios';

export const login = async (params) => {
  const response = await axios.post('/sessions', {
    ...params,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const signUp = async (params) => {
  const response = await axios.post('/users', {
    ...params,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};
