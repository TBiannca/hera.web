import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useStyle } from '../hooks/use-style'

export const RegisterRedirect = () => <Grid className={useStyle().redirect}>
  <Grid container justify={'center'} md={12} lg={12}><Typography> Nu ai un cont existent ?</Typography></Grid>
  <Grid container justify={'center'} md={12} lg={12}><NavLink to={'/login'}> Creeaza unul. </NavLink></Grid>
</Grid>