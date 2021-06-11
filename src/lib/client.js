import { PrismicLink } from 'apollo-link-prismic'
import { ApolloClient } from '@apollo/client/core/core.cjs.js'
import { InMemoryCache } from '@apollo/client/cache/cache.cjs.js'

const uri = `https://${import.meta.env.VITE_PRISMIC_REPO_ID}.prismic.io/graphql`

export const client = new ApolloClient({
  link: PrismicLink({ uri }),
  cache: new InMemoryCache(),
})
