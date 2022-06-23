import { from } from 'rxjs'
import { client } from '../../graphql'
import { DELETE_PERSON } from './queries/delete-person'

export const deletePerson = payload => from(client(payload.token).mutate({
        mutation: DELETE_PERSON,
        variables: { input: payload.id }
    })
)