import { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './layout.scss'
import { getWeather, getWeatherByCoord } from '../../store/reduser/helpers/appHelpers'
import getCurrentPosition from '../../utils/getCurrentPosition'
import CitiesContainer from '../CitiesContainer/CitiesContainer'
import InputContainer from '../InputContainer/InputContainer'

const cityDefault = 'Minsk'

const Layout = memo(() => {
  const state = useSelector((state) => state.weather)
  const dispatch = useDispatch()

  const successGeoLocCallback = useCallback(
    (pos) => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      dispatch(getWeatherByCoord({ lat, lon }))
    },
    [dispatch],
  )

  const errorGeoLocCallback = useCallback(() => {
    dispatch(getWeather(cityDefault))
  }, [dispatch])

  const getWeatherFromLocal = useCallback(() => {
    state.cities.map((item) => dispatch(getWeather(item)))
  }, [dispatch, state.cities])

  useEffect(() => {
    if (state.currentPosition === null) {
      getCurrentPosition(successGeoLocCallback, errorGeoLocCallback)
      getWeatherFromLocal()
    }
  }, [successGeoLocCallback, errorGeoLocCallback, state.currentPosition, getWeatherFromLocal])

  useEffect(() => {
    localStorage.setItem('weather', JSON.stringify(state.cities))
  }, [state.cities])

  return (
    <div className='app'>
      <InputContainer />
      <CitiesContainer />
    </div>
  )
})

export default Layout
