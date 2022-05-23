import {Link} from 'react-router-dom'
import { useDeletePerson } from './hooks/use-delete-person'

export const Action = ({ id }) => <Link to='/persoane' onClick={useDeletePerson(id)}>
    Șterge
</Link>