import {ApolloClient, InMemoryCache} from '@apollo/client'

export const client = token => new ApolloClient({
    uri: 'https://localhost:7216/graphql',
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer ${token}`,
    },
})
