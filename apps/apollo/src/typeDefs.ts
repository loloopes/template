// !WARNING: timestamp/date/uuid may need graphQL custom scalars
export const typeDefs = `#graphql
    type Foobar {
        message: String
    }
    
    type Query {
        hello: Foobar 
    }
`
