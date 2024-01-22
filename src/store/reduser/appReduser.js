import { createSlice } from '@reduxjs/toolkit'

import { getWeather } from './helpers/appHelpers'

const initialState = {
  weather: [],
}
// const nav = navigator.geolocation.getCurrentPosition((pos) => {
//   const lat = pos.coords.latitude
//   const lon = pos.coords.longitude
//   //   console.log(lat, lon)
// })

const appSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    addCity(state, action) {
      state.weather.push(action.payload)
    },
    removeCity(state, action) {
      state.notes = state.weather.filter((item) => item.city !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, { payload }) => {
      state.weather.push(payload)
    })
  },
})

export const { addCity, removeCity } = appSlice.actions
export default appSlice.reducer
