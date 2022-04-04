import React from 'react'
import { Formik } from 'formik'
import { Grid } from '@material-ui/core'
import { useStyle } from '../hooks/use-style'

export const Form = () => <Grid container justifyContent={'center'} style={{ marginTop: '80px' }}>
  <Formik onSubmit={() => null} initialValues={''}>
    <form>
      <Grid md={12} lg={12}>
        <input type="text" name="userName" placeholder={'nume'} className={useStyle().input} />
      </Grid>
      <Grid md={12} lg={12}>
        <input type="password" name="password" placeholder={'parola'}  className={useStyle().input} />
      </Grid>
      <Grid container md={12} lg={12} justifyContent={'center'}>
        <button type="submit" className={useStyle().button}>Creeaza cont</button>
      </Grid>
    </form>
  </Formik>
</Grid>