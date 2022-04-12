import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useStyle } from '../hooks/use-style'

export const LoginRedirect = () => <Grid className={useStyle().redirect}>
  <Grid container justifyContent={'center'}><Typography>Deja ai un cont existent ? </Typography></Grid>
  <Grid container justifyContent={'center'}><NavLink to={'/login'}> Apasa aici </NavLink></Grid>
</Grid>