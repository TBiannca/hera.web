import React from 'react'
import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { useStyle } from '../hooks/use-style'
import { LoginForm } from './form'
import { RegisterRedirect } from './register-redirect'
import { Image } from './image'

export const Login = () => {
    const isDesktopResolution = useMediaQuery(useTheme().breakpoints.up('md'))

    return <Grid container classes={useStyle()} justify={'center'}>
        { isDesktopResolution && <Image/> }
        <Grid item md={6} lg={6}>
            <Typography align={'center'} className={useStyle().title}>Bine ai revenit!</Typography>
            <LoginForm />
            <RegisterRedirect />
        </Grid>
    </Grid>
}