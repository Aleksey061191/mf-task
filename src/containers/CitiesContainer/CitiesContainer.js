import { useDispatch, useSelector } from 'react-redux'

import './CitiesContainer.scss'
import City from '../../components/City/Cyty'
import { removeCity } from '../../store/reduser/appReduser'

const CitiesContainer = () => {
  const cities = useSelector((state) => state.weather.weather)
  const dispatch = useDispatch()

  const handleRemove = (name) => {
    dispatch(removeCity(name))
  }
  return (
    <div className='cities-list'>
      {cities.map((el, i) => (
        <City city={el} handleRemove={handleRemove} key={i} />
      ))}
    </div>
  )
}

export default CitiesContainer
