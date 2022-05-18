import {combineReducers} from '@reduxjs/toolkit'
import {addPersonSlice} from './add-person'

export const addPerson = () => combineReducers({ addPerson: addPersonSlice.reducer })