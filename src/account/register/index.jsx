import React from 'react'
import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { useStyle } from '../hooks/use-style'
import { Form } from './form'
import { LoginRedirect } from './login-redirect'
import { Image } from './image'

export const Register = () => {
  const isDesktopResolution = useMediaQuery(useTheme().breakpoints.up('md'))

  return <Grid container classes={useStyle()} justify={'center'}>
    { isDesktopResolution && <Image/> }
    <Grid item md={6} lg={6}>
      <Typography align={'center'} className={useStyle().title}>Bine ai venit!</Typography>
      <Form/>
      <LoginRedirect/>
    </Grid>
  </Grid>
}