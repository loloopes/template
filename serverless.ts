import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "apollo-lambdas",
  frameworkVersion: "3.31.0",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    stage: "dev",
    region: "us-east-1",
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      POSTGRES_HOST: process.env.POSTGRES_HOST || '',
      POSTGRES_USER: process.env.POSTGRES_USER || '',
      POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || '',
      POSTGRES_DB: process.env.POSTGRES_LISTING_DB || ''
    },
    deploymentMethod: 'direct'
  },
  functions: {
    apolloHello: {
      handler: "./services/apolloGql1/src/index.graphqlHandler",
      description: "Lambda function to query graphql",
      memorySize: 256,
      events: [
        {
          http: {
            method: "post",
            path: "/hello"
          },
        },
        {
          http: {
            method: "get",
            path: "/hello"
          },
        }
      ],
    },
    apolloCiao: {
      handler: "./services/apolloGql2/src/index.graphqlHandler",
      description: "Lambda function to query graphql",
      memorySize: 256,
      events: [
        {
          http: {
            method: "post",
            path: "/ciao"
          },
        },
        {
          http: {
            method: "get",
            path: "/ciao"
          },
        }
      ],
    },
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node18",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
      external: ['better-sqlite3', 'mysql2', 'oracledb', 'sqlite3', 'tedious', 'mysql', 'pg-query-stream']
    },
    "serverless-offline": {
      httpPort: 3002,
      lambdaPort: 3003,
    },
  },
};

module.exports = serverlessConfiguration;
