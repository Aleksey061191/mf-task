import { useSelector } from 'react-redux'

import './CurrentCity.scss'

const CurrentCity = () => {
  const city = useSelector((state) => state.weather.currentCity)
  return (
    <div className='current-city'>
      <div className='current-city__name'>
        <div className='current-city__city-name'>{city.name}</div>
        <div className='current-city__description'>{city.weather[0].main}</div>
      </div>
      <div className='current-city__temp'>
        <div className={`current-city__weather-icon owf owf-${city.weather[0].id}`}></div>
        <div className='current-city__tempr'>{Math.trunc(city.main.temp)}°C</div>
      </div>
      <div className='current-city__info'>
        <div className='current-city__wind'>Wind speed: {Math.trunc(city.wind.speed)}m/s</div>
        <div className='current-city__humidity'>Humidity: {Math.trunc(city.main.humidity)}%</div>
      </div>
    </div>
  )
}

export default CurrentCity
