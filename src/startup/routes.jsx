import { Login } from '../account/login'
import { Register } from '../account/register'
import { AddPerson } from '../add-person'
import { Persons } from '../persons'

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
  },
  {
    path: '/persoane',
    Component: Persons,
  }
]
