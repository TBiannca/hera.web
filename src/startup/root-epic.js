import { combineEpics } from 'redux-observable'
import { auth } from '../account/epics'
import { addPerson } from '../add-person/epics'
import { getPersons } from '../persons/epics'

export const rootEpic = combineEpics(auth, addPerson, getPersons)