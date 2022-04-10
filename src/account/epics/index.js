import { combineEpics } from 'redux-observable'
import { login } from './login'
import { register } from './register'

export const auth = combineEpics(login, register)