import {makeStyles, TableBody, TableCell, TableRow} from '@material-ui/core'

let rows
rows = [
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
    { name: 'Topircean Bianca', role: 'Admin', action: 'delete' },
]

const useStyles = makeStyles({

    root: {
        '& .MuiTableCell-body': {
            backgroundColor: '#e4f3f3'
        },
    }
})

export const Content = () => {
    const classes = useStyles()
    
    return <TableBody>
        {rows.map((row) => (
            <TableRow className={classes.root}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.role}</TableCell>
                <TableCell align="center">{row.action}</TableCell>
            </TableRow>
        ))}
    </TableBody>
}