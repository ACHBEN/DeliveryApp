import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-api-url',
});

export default api;