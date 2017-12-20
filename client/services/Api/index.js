import axios from 'axios';

const apiInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 2000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/vnd.api+json',
  }
});
