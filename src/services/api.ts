import axios from 'axios';

// https://gorest.co.in/public-api/posts?_format=json&access-token=32076aa84dcb8091eb0e9884c2f8235943c02a4ae061304baac1a68969035fee&page=1

const api = axios.create({
  baseURL: 'https://gorest.co.in/public-api/'
})

export default api;