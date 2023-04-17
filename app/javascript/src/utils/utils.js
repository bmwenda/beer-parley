import axios from 'axios';

const HEADERS = { 'Content-Type': 'application/json' };

export const login = async (params) => {
  const response = await axios.post('/sessions', {
    ...params,
  }, {
    headers: HEADERS,
  });
  return response;
};

export const signUp = async (params) => {
  const response = await axios.post('/users', {
    ...params,
  }, {
    headers: HEADERS,
  });
  return response;
};

export const fetchBeers = async () => {
  const response = await axios.get('https://api.punkapi.com/v2/beers/');
  return response;
};

export const postReview = async (review, beer) => {
  const response = await axios.post('/reviews', {
    review,
    beer,
  }, {
    headers: HEADERS,
  });

  return response;
};

export const getCurrentUser = async () => {
  const response = await axios.get('current_user');
  return response;
};
