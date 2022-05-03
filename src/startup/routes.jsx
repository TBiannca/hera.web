import { Login } from '../account/login'
import { Register } from '../account/register'
import { AddPerson } from '../add-person'

export const routes = [{
    path: '/',
    Component: Register,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/adauga',
    Component: AddPerson,
  }
]
