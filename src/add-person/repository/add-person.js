import { from } from 'rxjs'
import { client } from '../../graphql'
import {CREATE_PERSON} from './query/create-person'

export const addPerson = payload => from(client(payload.token).mutate({
        mutation: CREATE_PERSON,
        variables: { input: payload.person }
    })
)