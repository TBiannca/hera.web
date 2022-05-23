import { combineReducers } from '@reduxjs/toolkit'
import { auth } from '../account/slices/index'
import { addPerson } from '../add-person/slices'
import { persons } from '../persons/slices'

export const rootReducer = combineReducers({ auth, addPerson, persons })