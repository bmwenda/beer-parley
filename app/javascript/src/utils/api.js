import axios from 'axios';

const HEADERS = { 'Content-Type': 'application/json' };
const REQUEST_HEADERS = { Accept: 'application/json' };

export const fetchItems = async (path, params = {}) => {
  let url = path;
  if (Object.keys(params).length !== 0) {
    const urlParams = new URLSearchParams(params);
    url = `${path}?${urlParams.toString()}`;
  }

  const response = await axios.get(
    url,
    { headers: REQUEST_HEADERS },
  );
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
