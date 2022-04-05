import React from 'react'
import { Grid } from '@material-ui/core'
import facialRecognition from '../images/Facial recognition.jpg'
import { useStyle } from '../hooks/use-style'

export const Image = () => <Grid item md={6} lg={6}>
  <img src={facialRecognition} alt={'photo'} className={useStyle().image} />
</Grid>