import { from } from 'rxjs'
import { client } from '../../graphql'
import {CREATE_PERSON} from './query/create-person'

export const addPerson = payload => from(client.mutate({
        mutation: CREATE_PERSON,
        variables: { input: payload }
    })
)