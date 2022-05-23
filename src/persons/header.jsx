import {makeStyles, TableCell, TableHead, TableRow} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        '& .MuiTableCell-head': {
            color: 'white',
            backgroundColor: '#000062'
        },
    }
})

export const Header = () => <TableHead>
    <TableRow className={useStyles().root}>
        <TableCell align='center' style={{ fontSize: 18, fontWeight: 'bolder' }}>Nume si Prenume</TableCell>
        <TableCell align='center' style={{ fontSize: 18, fontWeight: 'bolder' }}>Rol</TableCell>
        <TableCell align='center' style={{ fontSize: 18, fontWeight: 'bolder' }}>Actiune</TableCell>
    </TableRow>
</TableHead>