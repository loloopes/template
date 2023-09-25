# GraphQL Server Boilerplate

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

Based upon [turboless](https://github.com/antoinewg/turboless)

The repositories contains 2 lambda functions:

- Apollo: a simple hello world graphql server with no outside connection.
- Artemis: a graphql server that connects to a postgres database.

Both repositories shares a commom ts and eslint configuration from packages folder.
Artemis uses a knex configuration also available on the packages folder.

### Quick start (not so much)

Create and env file with the following variables:

- POSTGRES_HOST
- POSTGRES_USER
- POSTGRES_PASSWORD
- POSTGRES_DB

Check the `docker-compose.yml` file for the default values for local running.

Start the database with `docker-compose up -d postgres`.
Create the tables and seeds with `npm run migrations` and `npm run seeds`.

Run `npm run dev` to run locally the lambdas.

Call

```
curl --location 'http://localhost:3001/dev/hello' \
--header 'x-apollo-operation-name: any' \
--header 'Content-Type: application/json' \
--data '{"query":"query any {\n    hello {\n        message\n    }\n}","variables":{}}'
```

and

```
curl --location 'http://localhost:3002/dev/hello' \
--header 'x-apollo-operation-name: any' \
--header 'Content-Type: application/json' \
--data '{"query":"query any {\n    hello {\n        id\n        name\n        field\n        created_at\n        updated_at\n    }\n}","variables":{}}'
```

### Scripts

Each app has the basic scripts:

- build: build the js files
- lint
- lint:fix
- package: build the packages for serverless deployment
- dev: run the lambdas locally
- deploy: deploy the lambdas to aws

On the root folder you can run `npm run <script>` to run the script on all apps.
You can run a single script on a single app with `npm run <script> -w apps/<app>`.

For example, you can run `npm run lint` and see an `any` warning on Artemis.

### Contributing

Feel free to open a PR, file an issue. We'll happily look into it.
