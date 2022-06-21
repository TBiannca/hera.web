import React from 'react'
import { Route } from 'react-router-dom'
import { routes } from './routes'

export const Mapping = () => {
    const actualRoutes = routes.filter(route => !!route.authorized === false)
    
    return <>
        {
            actualRoutes.map(route => <Route exact path={route.path} key={route.path}>
                <route.Component/>
            </Route>)
        }
    </>
}

