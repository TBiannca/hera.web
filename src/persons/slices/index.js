import { combineReducers } from '@reduxjs/toolkit'
import { getPersonsSlice } from './get-persons'
import { deletePersonSlice } from './delete-person'

export const persons = combineReducers({ 
    get: getPersonsSlice.reducer,
    delete: deletePersonSlice.reducer
})