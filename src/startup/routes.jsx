import { Login } from '../account/login'
import { Register } from '../account/register'

export const routes = [{
    path: '/',
    Component: Register,
  },
  {
    path: '/login',
    Component: Login,
  }
]
