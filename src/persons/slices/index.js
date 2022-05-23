import { combineReducers } from '@reduxjs/toolkit'
import { getPersonsSlice } from './get-persons'

export const getPersons = combineReducers({ get: getPersonsSlice.reducer })