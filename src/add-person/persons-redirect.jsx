import {Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import React from 'react'

export const PersonsRedirect = () =><Typography style={{ marginTop: 170, letterSpacing: '0.05rem' }}>
    Apasă
    <Link to='/persoane' style={{ height: 40 }} type='submit' variant='contained'> AICI </Link>
    pentru a vedea deja persoanele existente în sistem.
</Typography>