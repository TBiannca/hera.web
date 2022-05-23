import { makeStyles, TableBody, TableCell, TableRow } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { get } from 'lodash'

const useStyles = makeStyles({

    root: {
        '& .MuiTableCell-body': {
            backgroundColor: '#e4f3f3'
        },
    }
})

export const Content = () => {
    const classes = useStyles()
    const persons = useSelector(state => get(state, 'getPersons.get.data.data.persons', []))
    
    return <TableBody>
        {persons.map((row) => (
            <TableRow className={classes.root}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.role}</TableCell>
                <TableCell align="center">delete</TableCell>
            </TableRow>
        ))}
    </TableBody>
}