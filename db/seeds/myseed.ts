import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("mytable").del();

    // Inserts seed entries
    await knex("mytable").insert([
        { name: "hello", field: "world" },
        { name: "foo", field: "bar" }
    ]);
};
