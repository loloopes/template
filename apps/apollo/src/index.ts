import { ApolloServer, BaseContext } from '@apollo/server'
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from '@as-integrations/aws-lambda'
import { resolvers } from './resolvers.js'
import { typeDefs } from './typeDefs.js'

const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
})

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventRequestHandler(),
  {
    context: async () => {
      return {}
    },
  }
)
