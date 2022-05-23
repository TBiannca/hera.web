import {makeStyles} from '@material-ui/core'
import image from '../../account/images/background.jpg'

export const useStyle = makeStyles(() => ({
    root: {
        width: '55vw',
        height: '100vh',
        background: 'white',
        margin: 'auto',
        justifyContent: 'center',
    },
    background: {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'100vh',
    },
    column: {
        justifyContent:'center', 
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 150,
    },
    scroll: {
        height: 800,
        width: '49vw',
        overflowX: 'scroll',
    }
}))