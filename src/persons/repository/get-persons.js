import { from } from 'rxjs'
import { client } from '../../graphql'
import { GET_PERSONS } from './queries/get-persons'

export const getPersons = token => from(client(token).query({
        query: GET_PERSONS,
    })
)