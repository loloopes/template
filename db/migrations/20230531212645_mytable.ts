import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("mytable", (table) => {
    table.increments("id").primary();
    table.timestamps(true, true);
    table.string("name");
    table.string("field");
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("mytable");
}

