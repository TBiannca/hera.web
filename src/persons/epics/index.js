import {combineEpics} from 'redux-observable'
import {get} from './get-persons'

export const getPersons = combineEpics(get)