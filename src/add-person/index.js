import React from 'react'
import { Formik } from 'formik'
import {Box, Grid, Typography} from '@material-ui/core'
import { trainModel } from '../add-person/train-model'
import {PersonForm} from './person-form'
import {useStyle} from './hooks/use-style'
import {useDispatch} from 'react-redux'

const initialValues = {
    firstName: null,
    lastName: null,
    role: null,
    photos: [],
}

export const AddPerson = () => {
    const dispatch = useDispatch()
    
    return <Box className={useStyle().background}>
        <Grid container className={useStyle().root}>
            <Grid container className={useStyle().column}>
                <Typography variant={'h4'} style={{marginBottom: 80, marginTop: '-16vh'}}>Adaugă o persoană în
                    sistem</Typography>
                <Formik initialValues={initialValues} onSubmit={values => trainModel(values, dispatch)}>
                    {(formik) => {
                        return (
                            <PersonForm {...formik} />
                        )
                    }}
                </Formik>
                <img src="" id="img" alt="ceva" hidden/>
            </Grid>
        </Grid>
    </Box>
}
