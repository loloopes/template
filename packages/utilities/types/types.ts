import { BatchedSQLDataSourceProps } from "@nic-jennings/sql-datasource";
import type { Knex } from "knex";

export type KnexConfig = Knex.Config;

export type BatchedDataSourceProps = {
  knexConfig: KnexConfig;
  writeKnexConfig?: BatchedSQLDataSourceProps["writeKnexConfig"];
  cache?: BatchedSQLDataSourceProps["cache"];
  context?: BatchedSQLDataSourceProps["context"];
};

// eslint-ignore-next-line @typescript-eslint/no-explicit-any
export type LooseObject = {
  // eslint-ignore-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}