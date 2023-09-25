import { ApolloServer, BaseContext } from '@apollo/server'
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from '@as-integrations/aws-lambda'
import { resolvers } from './resolvers.js'
import { typeDefs } from './typeDefs.js'
import { MyDataSource } from './datasource.js'
import { knexConfig } from 'utilities'

const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
})

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventRequestHandler(),
  {
    context: async () => {
      return {
        db: new MyDataSource({ knexConfig })
      }
    },
  }
)
