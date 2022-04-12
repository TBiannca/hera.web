import React from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from '@material-ui/core'
import { LoginForm } from './form'
import { RegisterRedirect } from './register-redirect'
import { Image } from './image'
import { useStyle } from '../hooks/use-style'

export const Login = () => {
    const isDesktopResolution = useMediaQuery(useTheme().breakpoints.up('md'))

    return <Grid container className={useStyle().root} justifyContent={'center'}>
        { isDesktopResolution && <Image/> }
        <Grid item md={6} lg={6}>
            <Typography align={'center'} className={useStyle().title}>Bine ai revenit!</Typography>
            <LoginForm />
            <RegisterRedirect />
        </Grid>
    </Grid>
}