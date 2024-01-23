import { createAsyncThunk } from '@reduxjs/toolkit'

import weatherApi from '../../../services/weatherApi'
import { getCurrentPosition } from '../../../utils/utils'

export const getWeather = createAsyncThunk('weather/getWeather', async (city, { rejectWithValue }) => {
  try {
    const res = await weatherApi.getWeather(city).then((response) => response.data)
    return res
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

export const getCurrentWeather = createAsyncThunk('weather/getCurrentWeather', async (data, { rejectWithValue }) => {
  try {
    // const { lat, lon } = data
    const location = getCurrentPosition()
    console.log(location)
    // const res = await weatherApi.getCurrentPosWeather(lat, lon).then((respons) => respons.data)
    // return res
  } catch (err) {
    return rejectWithValue(err.message)
  }
})
