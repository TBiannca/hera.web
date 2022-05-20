import { combineEpics } from 'redux-observable'
import { auth } from '../account/epics'
import { addPerson } from '../add-person/epics'

export const rootEpic = combineEpics(auth, addPerson)