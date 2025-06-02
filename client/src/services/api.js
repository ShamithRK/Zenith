// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust to match your backend route prefix
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
