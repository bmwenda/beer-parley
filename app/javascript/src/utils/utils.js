import axios from 'axios';
import { fetchItems, postItems } from './api';

const HEADERS = { 'Content-Type': 'application/json' };

export const login = async (params) => postItems('/sessions', params);

export const signUp = async (params) => postItems('/users', params);

export const fetchBeers = async () => fetchItems('https://api.punkapi.com/v2/beers/');

export const postReview = async (review, beer) => {
  const response = await axios.post('/reviews', {
    review,
    beer,
  }, {
    headers: HEADERS,
  });

  return response;
};

export const getCurrentUser = async () => fetchItems('/current_user');

export const getReviews = async (queryParams) => fetchItems('/reviews', queryParams);

export const parseDate = (timestamp) => {
  if (!timestamp) return '';
  const dateObj = new Date(timestamp);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'long' });
  const year = dateObj.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const getRecommendations = async () => fetchItems('/recommendations');
