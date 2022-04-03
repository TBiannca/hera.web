import React from 'react'
import { Route } from 'react-router-dom'
import { routes } from './routes'

export const Mapping = () => <>
  {
    routes.map(route => <Route path={route.path} key={route.path}>
      <route.Component />
    </Route>)
  }
</>

