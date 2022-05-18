import {Field, Form} from 'formik'
import React from 'react'
import {Box, Button, FormLabel, Grid} from '@material-ui/core'

export const PersonForm = formik => {
    console.log(formik)
    
    return <Form>
        <Box style={{ flexDirection: 'column' }}>
            <Box style={{ flexDirection: 'column', marginBottom: 50 }}>
                <FormLabel style={{ fontWeight: 'bold' }}>Nume:</FormLabel>
                <Grid>
                    <Field type="text" name="lastName" style={{ width: '30vw', height: 25 }} />
                </Grid>
            </Box>
            <Box style={{ flexDirection: 'column', marginBottom: 50 }}>
                <FormLabel style={{ fontWeight: 'bold' }}>Prenume:</FormLabel>
                <Grid>
                    <Field type="text" name="firstName" style={{ width: '30vw', height: 25 }} />
                </Grid>
            </Box>
            <Box style={{ flexDirection: 'column', marginBottom: 50 }}>
                <FormLabel style={{ fontWeight: 'bold' }}>Rolul persoanei:</FormLabel>
                <Grid>
                    <Field type="text" name="role" style={{ width: '30vw', height: 25 }} />
                </Grid>
            </Box>
            <Box style={{ marginBottom: 50 }}>
                <input
                    multiple
                    type="file"
                    name="photos"
                    onChange={event => {
                        const files = event.target.files
                        let myFiles = Array.from(files)

                        formik.setFieldValue('photos', myFiles)
                    }}
                />
            </Box>
            <Box textAlign='center'>
                <Button type='submit' variant='contained'> ADAUGĂ </Button>
            </Box>
        </Box>
    </Form>
}
