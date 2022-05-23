import { from } from 'rxjs'
import { client } from '../../graphql'
import { GET_PERSONS } from './queries/get-persons'

export const getPersons = () => from(client.query({
        query: GET_PERSONS,
    })
)