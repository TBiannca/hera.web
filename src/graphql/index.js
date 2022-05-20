import {ApolloClient, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://localhost:7216/graphql',
    cache: new InMemoryCache(),
})
