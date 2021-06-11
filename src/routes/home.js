import { client } from '$lib/client.js'
import { gql } from '@apollo/client/core/core.cjs.js'

export const post = async () => {
  try {
    const query = gql`
      query {
        _allDocuments {
          edges {
            node {
              _meta {
                id
              }
            }
          }
        }
      }
    `
    const { data } = await client.query({
      query,
    })

    return {
      status: 200,
      body: data,
    }
  } catch (error) {
    return { status: 500, error }
  }
}
