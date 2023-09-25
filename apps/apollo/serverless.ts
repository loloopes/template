import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "apollo1",
  plugins: ["serverless-plugin-typescript", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    httpApi: {
      cors: true
    },
    stage: "dev",
    region: "us-east-1",
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      POSTGRES_HOST: process.env.POSTGRES_HOST || '',
      POSTGRES_USER: process.env.POSTGRES_USER || '',
      POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || '',
      POSTGRES_DB: process.env.POSTGRES_DB || ''
    },
    deploymentMethod: 'direct'
  },
  functions: {
    hello: {
      handler: "src/index.graphqlHandler",
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
  },
  custom: {
    "serverless-offline": {
      httpPort: 3001,
      lambdaPort: 4001,
    },
  },
};

module.exports = serverlessConfiguration;
