import {makeStyles} from '@material-ui/core'

export const useStyle = makeStyles(theme =>({
    root: {
        width: '65vw',
        height: '63vh',
        background: '#B9C5EE',
        margin: 'auto',
        marginTop: '16vh',
        borderRadius: 20,
    },
    title: {
        marginTop: '5vh',
        fontSize: 25,
        [theme.breakpoints.up('md')] : { fontSize: '3vw' },
    },
    image: {
        objectFit: 'cover',
        width: '100%',
        height: '63vh',
    },
    input: {
        appearance: 'none',
        background: '#f2f2f2',
        padding: 12,
        width: 180,
        [theme.breakpoints.up('md')] : { width: '22vw' },
        borderRadius: 20,
        marginBottom: 30,
    },
    button: {
        borderRadius: '20px',
        backgroundColor: '#433A7B',
        color: '#FFFFFF',
        padding: '0.7vw 3vw',
    },
    redirect: { 
        marginTop: '3vw',
        [theme.breakpoints.down('md')] : {
            marginTop: 80,
            fontSize: 15,
        }
    }
    
}))