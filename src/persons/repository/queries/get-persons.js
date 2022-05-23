import { gql } from '@apollo/client'

export const GET_PERSONS = gql`
    query {
      persons {
        id,
        name,
        role
      }
    }
`