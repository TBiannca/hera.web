import { combineReducers } from '@reduxjs/toolkit'
import { auth } from '../account/slices/index'

export const rootReducer = combineReducers({ auth })