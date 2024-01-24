import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Input from '../../components/Input/Input'
import { addCity } from '../../store/reduser/appReduser'
import { getWeather } from '../../store/reduser/helpers/appHelpers'

const InputContainer = () => {
  const [value, setValue] = useState('')
  const cities = useSelector((state) => state.weather.cities)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const clickButton = (e) => {
    e.preventDefault()
    if (value !== '' && !cities.includes(value)) {
      dispatch(getWeather(value.toLowerCase()))
      dispatch(addCity(value.toLowerCase()))
    }
    setValue('')
  }
  return <Input handleChange={handleChange} value={value} clickButton={clickButton} />
}

export default InputContainer
