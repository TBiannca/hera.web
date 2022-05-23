import { combineEpics } from 'redux-observable'
import { get } from './get-persons'
import { deletePerson } from './delete-person'

export const persons = combineEpics(get, deletePerson)