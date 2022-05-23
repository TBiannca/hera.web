import { gql } from '@apollo/client'

export const DELETE_PERSON = gql`
    mutation($input: Int!) {
      deletePerson(input: $input) 
      {
        name
        role
        descriptors
      }
}
`