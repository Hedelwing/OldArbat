import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const cache = new InMemoryCache()

const link = createHttpLink({
  uri: process.env.API,
})

const createApolloClient = () => new ApolloClient({
  ssrMode: typeof window === "undefined",
  link,
  cache
})

let apolloClient = null

const initApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    const existingCache = _apolloClient.extract()
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  if (typeof window === "undefined") return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export default initApollo
