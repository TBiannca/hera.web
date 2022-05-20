import { gql } from '@apollo/client'

export const CREATE_PERSON = gql`
    mutation($input: [TCreatePerson!]!) {
      createPerson(input: $input) 
      {
        name
        role
        descriptors
      }
    }
`