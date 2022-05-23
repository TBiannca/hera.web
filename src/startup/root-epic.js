import { combineEpics } from 'redux-observable'
import { auth } from '../account/epics'
import { addPerson } from '../add-person/epics'
import { persons } from '../persons/epics'

export const rootEpic = combineEpics(auth, addPerson, persons)