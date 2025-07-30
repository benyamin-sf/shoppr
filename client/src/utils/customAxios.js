import axios from 'axios';

const customInstance = axios.create({
  baseURL: 'https://strapi-store-server.onrender.com/api',
  responseType: 'json',
});

export default customInstance;
