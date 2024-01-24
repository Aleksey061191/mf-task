import apiService from './apiService'

const weatherApi = {
  getWeatherByCoord: (lat, lon) =>
    apiService.get(`weather?lat=${lat}&lon=${lon}&appid=f4a06441d36015d91ff70d642b062e8b&units=metric`),
  getWeather: (city) => apiService.get(`weather?q=${city}&appid=f4a06441d36015d91ff70d642b062e8b&units=metric`),
}

export default weatherApi
