import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useStyle } from '../hooks/use-style'

export const RegisterRedirect = () => <Grid className={useStyle().redirect}>
  <Grid container justifyContent={'center'} md={12} lg={12}><Typography> Nu ai un cont existent ?</Typography></Grid>
  <Grid container justifyContent={'center'} md={12} lg={12}><NavLink to={'/'}> Creeaza unul. </NavLink></Grid>
</Grid>