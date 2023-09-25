const path = require("path");
require("dotenv").config();
import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  local: {
    client: "pg",
    connection: {
      host: process.env.POSTGRES_HOST,
      port: 5432,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    },
    migrations: {
      directory: 'db/migrations',
    },
    seeds: {
      directory: 'db/seeds',
    },
  }
};

module.exports = config;
