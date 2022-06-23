import React from 'react'
import {Box, Grid, Typography} from '@material-ui/core'
import {useStyle} from '../add-person/hooks/use-style'
import {PersonsTable} from './table'
import { Behaviour } from './behaviour'

export const Persons = () => {
    const classes = useStyle()
    
    return <>
    <Behaviour/>
    <Box className={classes.background}>
        <Grid container className={classes.root}>
            <Grid container className={classes.column}>
                <Typography variant={'h4'} style={{marginBottom: 80, marginTop: '-10vh'}}>
                    Persoanele existente in sistem:
                </Typography>
                <PersonsTable/>
            </Grid>
        </Grid>
    </Box>
</>
}
