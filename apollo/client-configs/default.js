import { InMemoryCache } from 'apollo-cache-inmemory'

export default () => ({
  httpEndpoint: process.env.GRAPHCMS_API,
  getAuth: () => `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  cache: new InMemoryCache()
})
