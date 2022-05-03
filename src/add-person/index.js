import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Grid } from '@material-ui/core'
import { trainModel } from '../add-person/train-model'

const initialValues = {
    label: null,
    photos: [],
}

export const AddPerson = () => <Grid container justifyContent={'center'} style={{marginTop: '80px'}}>
    <Formik initialValues={initialValues} onSubmit={trainModel}>
        {(formik) => {
            return (
                <>
                    <Form>
                        <Field type='text' name='label' />
                        <input
                            multiple
                            type='file'
                            name='photos'
                            onChange={event => {
                                const files = event.target.files
                                let myFiles =Array.from(files)

                                formik.setFieldValue('photos', myFiles)
                            }}
                        />
                        <button type='submit'> Adauga </button>
                    </Form>
                </>
            )
        }}
    </Formik>
    <img src='' id='img' alt='ceva' hidden />
</Grid>
