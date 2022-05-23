import { makeStyles, TableBody, TableCell, TableRow } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { get } from 'lodash'
import { Action } from './action'

const useStyles = makeStyles({

    root: {
        '& .MuiTableCell-body': {
            backgroundColor: '#e4f3f3'
        },
    }
})

export const Content = () => {
    const classes = useStyles()
    const persons = useSelector(state => get(state, 'persons.get.data.data.persons', []))
    
    return <TableBody>
        {persons.map(row => (
                <TableRow className={classes.root}>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.role}</TableCell>
                    <TableCell align="center">
                        <Action id={row.id}/>
                    </TableCell>
                </TableRow>
            ))}
    </TableBody>
}