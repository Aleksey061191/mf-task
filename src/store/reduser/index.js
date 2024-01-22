import { combineReducers } from '@reduxjs/toolkit'

import appReduser from './appReduser'

const rootReducer = combineReducers({
  weather: appReduser,
})

export default rootReducer
