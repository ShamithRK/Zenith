import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Change this to match your backend server
  withCredentials: true,
});

export default api;
