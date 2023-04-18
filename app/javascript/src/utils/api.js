import axios from 'axios';

const HEADERS = { 'Content-Type': 'application/json' };
const REQUEST_HEADERS = { Accept: 'application/json' };

export const fetchItems = async (path) => {
  const response = await axios.get(path, { headers: REQUEST_HEADERS });
  return response;
};

export const postItems = async (path, payload) => {
  const response = await axios.post(path, {
    ...payload,
  }, {
    headers: HEADERS,
  });
  return response;
};
