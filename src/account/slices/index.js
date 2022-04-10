import { combineReducers } from '@reduxjs/toolkit'
import { loginSlice } from './login'
import { registerSlice } from './register'

export const auth = combineReducers(({ 
    login: loginSlice.reducer,
    register: registerSlice.reducer,
}))