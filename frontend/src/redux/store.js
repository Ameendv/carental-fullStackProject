import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import userLogged from './reducers/userLoggedSlice'
import authReducer from './auth/AuthSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    logged:userLogged,
    auth:authReducer
  },
})