import React from 'react'
import {Box, Grid, Typography} from '@material-ui/core'
import {useStyle} from '../add-person/hooks/use-style'
import {PersonsTable} from './table'

export const Persons = () => <Box className={useStyle().background}>
    <Grid container className={useStyle().root}>
        <Grid container className={useStyle().column}>
            <Typography variant={'h4'} style={{marginBottom: 80, marginTop: '-10vh'}}>
                Persoanele existente in sistem:
            </Typography>
            <PersonsTable />
        </Grid>
    </Grid>
</Box>