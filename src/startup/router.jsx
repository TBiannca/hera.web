import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Mapping } from './mapping'

export const Router = () => <BrowserRouter>
  <Switch>
    <Mapping />
  </Switch>
</BrowserRouter>

