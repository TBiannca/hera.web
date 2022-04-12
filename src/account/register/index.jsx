import React from 'react'
import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { RegisterForm } from './form'
import { LoginRedirect } from './login-redirect'
import { Image } from './image'
import { useStyle } from '../hooks/use-style'

export const Register = () => {
  const isDesktopResolution = useMediaQuery(useTheme().breakpoints.up('md'))

  return <Grid container className={useStyle().root} justifyContent={'center'}>
    { isDesktopResolution && <Image/> }
    <Grid item md={6} lg={6}>
      <Typography align={'center'} className={useStyle().title}>Bine ai venit!</Typography>
      <RegisterForm />
      <LoginRedirect />
    </Grid>
  </Grid>
}