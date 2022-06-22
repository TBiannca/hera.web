import React, { useCallback } from 'react'
import { Form, Formik, Field } from 'formik'
import { Grid } from '@material-ui/core'
import { useStyle } from '../hooks/use-style'
import { useDispatch } from 'react-redux'
import { actions } from '../slices/register'
import { useHistory } from 'react-router-dom'

const useOnSubmit = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  
  return useCallback(values => {
    dispatch(actions.attempt(values))
    history.push('/login')
  }, [])
}

export const RegisterForm = () => <Grid container justifyContent={'center'} style={{marginTop: '80px'}}>
  <Formik initialValues={{}} onSubmit={useOnSubmit()}>
    <Form>
      <Grid>
        <Field type="text" name="userName" placeholder={'nume'} className={useStyle().input}/>
      </Grid>
      <Grid>
        <Field type="password" name="password" placeholder={'parola'} className={useStyle().input}/>
      </Grid>
      <Grid container justifyContent={'center'}>
        <button type="submit" className={useStyle().button}>Creeaza cont</button>
      </Grid>
    </Form>
  </Formik>
</Grid>