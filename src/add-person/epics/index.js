import {combineEpics} from 'redux-observable'
import {add} from './add-person'

export const addPerson = combineEpics(add)