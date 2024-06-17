import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5161', // Ensure this is correct
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
