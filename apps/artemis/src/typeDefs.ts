// !WARNING: timestamp/date/uuid may need graphQL custom scalars
export const typeDefs = `#graphql
  type Items {
    id: ID
    name: String
    field: String
    created_at: String
    updated_at: String
  }

  type Query {
    hello: [Items]
  }
`
