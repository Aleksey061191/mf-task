import axios from 'axios'

const apiService = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  timeout: 1000,
})

export default apiService
