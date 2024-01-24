import './City.scss'
import './owfont-regular.scss'

const City = ({ city, handleRemove }) => {
  return (
    <div className='item-container'>
      <p className='item-name'>{city.name}</p>
      <span className='item-remove' onClick={() => handleRemove(city.name)}>
        x
      </span>
      <div className={`item-icon owf owf-${city.weather[0].id}`}></div>
      <div className='item-description'>
        <span className='item-temperature'>{Math.trunc(city.main.temp)}°C</span>
        <span className='item-weather-description'>{city.weather[0].description}</span>
      </div>
      <div className='item-wind'>Wind speed: {Math.trunc(city.wind.speed)}m/s</div>
      <div className='item-humidity'>Humidity: {Math.trunc(city.main.humidity)}%</div>
    </div>
  )
}

export default City
