import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Input from '../../components/Input/Input'
import { getWeather } from '../../store/reduser/helpers/appHelpers'

const InputContainer = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const clickButton = (e) => {
    e.preventDefault()
    if (value !== '') {
      dispatch(getWeather(value))
    }
    setValue('')
  }
  return <Input handleChange={handleChange} value={value} clickButton={clickButton} />
}

export default InputContainer
