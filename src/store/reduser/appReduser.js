import { createSlice } from '@reduxjs/toolkit'

import { getWeather, getWeatherByCoord } from './helpers/appHelpers'

const initialState = {
  cities: localStorage.getItem('weather') ? JSON.parse(localStorage.getItem('weather')) : [],
  weather: [],
  currentCity: null,
}

const appSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addCity(state, { payload }) {
      state.cities.push(payload)
    },
    removeCity(state, { payload }) {
      state.weather = state.weather.filter((item) => item.name !== payload)
      state.cities = state.cities.filter((item) => item !== payload.toLowerCase())
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherByCoord.fulfilled, (state, { payload }) => {
      state.currentCity = payload
    })
    builder.addCase(getWeather.fulfilled, (state, { payload }) => {
      state.weather.push(payload)
    })
  },
})

export const { addCity, removeCity } = appSlice.actions
export default appSlice.reducer
