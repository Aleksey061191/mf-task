import { createSlice } from '@reduxjs/toolkit'

import { getCurrentWeather, getWeather } from './helpers/appHelpers'

import weatherApi from '../../services/weatherApi'

const initialState = {
  weather: [],
}

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(async (position) => {
//     const weather = await weatherApi.getCurrentPosWeather(position.coords.latitude, position.coords.longitude)
//     console.log(weather.data.name)
//     // initialState.weather.put(weather)
//   })
// }
// const nav = navigator.geolocation.getCurrentPosition((pos) => {
//   const lat = pos.coords.latitude
//   const lon = pos.coords.longitude
//   //   console.log(lat, lon)
// })

const appSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addCity(state, action) {
      state.weather.push(action.payload)
    },
    removeCity(state, action) {
      state.weather = state.weather.filter((item) => item.name !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeather.fulfilled, (state, { payload }) => {
      state.weather.push(payload)
    })
    builder.addCase(getWeather.fulfilled, (state, { payload }) => {
      state.weather.push(payload)
    })
  },
})

export const { addCity, removeCity } = appSlice.actions
export default appSlice.reducer
