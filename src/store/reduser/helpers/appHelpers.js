import { createAsyncThunk } from '@reduxjs/toolkit'

import weatherApi from '../../../services/weatherApi'

export const getWeather = createAsyncThunk('api/getWeather', async (data, { rejectWithValue }) => {
  try {
    const { city } = data
    console.log(data)
    const rez = await weatherApi.getWeather(city).then((response) => response.data)
    return rez
  } catch (err) {
    const error = err
    return rejectWithValue(error.message)
  }
})
