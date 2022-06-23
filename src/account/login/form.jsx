import React from 'react'
import { Grid } from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {get} from 'lodash'
import {Redirect} from 'react-router-dom'
import {LoginPage} from './login-page'
  
export const LoginForm = () => {
  const logged = useSelector(state => get(state, 'auth.login.data', null))
  
  return logged === null ? <Grid container justifyContent={'center'} style={{marginTop: '80px'}}>
    <LoginPage />
  </Grid> : <Redirect to={'/adauga'} />
}