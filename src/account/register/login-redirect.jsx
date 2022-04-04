import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

export const LoginRedirect = () => <Grid style={{ marginTop: '110px' }}>
  <Grid container justify={'center'} md={12} lg={12}><Typography>Deja ai un cont existent ? </Typography></Grid>
  <Grid container justify={'center'} md={12} lg={12}><NavLink to={'/login'}> Apasa aici </NavLink></Grid>
</Grid>