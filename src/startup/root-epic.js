import { combineEpics } from 'redux-observable'
import { auth } from '../account/epics'

export const rootEpic = combineEpics(auth)