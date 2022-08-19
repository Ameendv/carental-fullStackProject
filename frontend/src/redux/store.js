import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import userLogged from './reducers/userLoggedSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    logged:userLogged
  },
})