import React from 'react'
import {Box, Grid, Typography} from '@material-ui/core'
import {useStyle} from '../add-person/hooks/use-style'
import {PersonsTable} from './table'
import { Behaviour } from './behaviour'
import {Redirect} from 'react-router-dom'

export const Persons = ({user= true}) => {
    const classes = useStyle()
    
    return user ? <Box className={classes.background}>
        <Behaviour/>
        <Grid container className={classes.root}>
            <Grid container className={classes.column}>
                <Typography variant={'h4'} style={{marginBottom: 80, marginTop: '-10vh'}}>
                    Persoanele existente in sistem:
                </Typography>
                <PersonsTable/>
            </Grid>
        </Grid>
    </Box> : <Redirect to={'/login'} />
}
