import {makeStyles} from '@material-ui/core'

export const useStyle = makeStyles({
    root: {
        width: '65vw',
        height: '63vh',
        background: '#B9C5EE',
        margin: 'auto',
        marginTop: '16vh',
        borderRadius: 20,
    },
    image: {
        objectFit: 'cover',
        width: '100%',
        height: '597px',
    },
    input: {
        appearance: 'none',
        background: '#f2f2f2',
        padding: 12,
        width: 400,
        borderRadius: 20,
        marginBottom: 30,
    },
    button: {
        borderRadius: '20px',
        backgroundColor: '#433A7B',
        color: '#FFFFFF',
        padding: '12px 45px',
        transition: 'transform 80ms ease-in'
}
})