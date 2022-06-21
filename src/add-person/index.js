import React from 'react'
import { Formik } from 'formik'
import {Box, Grid, Typography} from '@material-ui/core'
import { trainModel } from '../add-person/train-model'
import {PersonForm} from './person-form'
import {useStyle} from './hooks/use-style'
import {useDispatch} from 'react-redux'
import {PersonsRedirect} from './persons-redirect'
import {Redirect, useHistory} from 'react-router-dom'

const initialValues = {
    firstName: null,
    lastName: null,
    role: null,
    photos: [],
}

export const AddPerson = ({ user= true }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyle()
    
    return <Box className={classes.background}>
        <Grid container className={classes.root}>
            <Grid container className={classes.column}>
                <Typography variant={'h4'} style={{marginBottom: 80, marginTop: '-16vh'}}>Adaugă o persoană în
                    sistem</Typography>
                <Formik initialValues={initialValues} onSubmit={values => trainModel(values, dispatch, history)}>
                    {(formik) => {
                        return (
                            <PersonForm {...formik} />
                        )
                    }}
                </Formik>
                <img src="" id="img" alt="ceva" hidden/>
            </Grid>
            <PersonsRedirect />
        </Grid>
    </Box>
}
