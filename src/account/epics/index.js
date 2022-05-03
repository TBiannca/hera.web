import { combineEpics } from 'redux-observable'
import { login } from './login'
import { register } from './register'
import { refresh } from './refresh'

export const auth = combineEpics(login, register, refresh)