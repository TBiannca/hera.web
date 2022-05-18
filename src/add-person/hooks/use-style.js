import {makeStyles} from '@material-ui/core'
import image from '../../account/images/background.jpg'

export const useStyle = makeStyles(() => ({
    root: {
        width: '55vw',
        height: '99vh',
        background: 'white',
        margin: 'auto',
        justifyContent: 'center',
    },
    background: {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'98vh',
    },
    column: {
        justifyContent:'center', 
        alignItems: 'center',
        flexDirection: 'column',
    }
}))