import React, { useCallback } from 'react'
import { Form, Formik, Field } from 'formik'
import { Grid } from '@material-ui/core'
import { useStyle } from '../hooks/use-style'
import { useDispatch } from 'react-redux'
import { actions } from '../slices/login'

const useOnSubmit = () => {
  const dispatch = useDispatch()
  
  return useCallback(values => {
    dispatch(actions.attempt(values))
  }, [])
}
  
export const LoginForm = () => <Grid container justifyContent={'center'} style={{marginTop: '80px'}}>
  <Formik initialValues={{}} onSubmit={useOnSubmit()}>
    <Form>
      <Grid md={12} lg={12}>
        <Field type="text" name="userName" placeholder={'nume'} className={useStyle().input}/>
      </Grid>
      <Grid md={12} lg={12}>
        <Field type="password" name="password" placeholder={'parola'} className={useStyle().input}/>
      </Grid>
      <Grid container md={12} lg={12} justifyContent={'center'}>
        <button type="submit" className={useStyle().button}>Conectare</button>
      </Grid>
    </Form>
  </Formik>
</Grid>
