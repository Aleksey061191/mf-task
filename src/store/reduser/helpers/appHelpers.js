import { createAsyncThunk } from '@reduxjs/toolkit'

import weatherApi from '../../../services/weatherApi'

export const getWeather = createAsyncThunk('weather/getWeather', async (city, { rejectWithValue }) => {
  try {
    const res = await weatherApi.getWeather(city).then((response) => response.data)
    return res
  } catch (err) {
    alert('The city was not found!')
    return rejectWithValue(err.message)
  }
})

export const getWeatherByCoord = createAsyncThunk('weather/getWeatherByCoord', async (data, { rejectWithValue }) => {
  try {
    const { lat, lon } = data
    const res = await weatherApi.getWeatherByCoord(lat, lon).then((respons) => respons.data)
    return res
  } catch (err) {
    return rejectWithValue(err.message)
  }
})
