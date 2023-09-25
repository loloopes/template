import { BatchedSQLDataSource } from "@nic-jennings/sql-datasource";

export class MyDataSource extends BatchedSQLDataSource {
  constructor(config: any) {
    super(config);
  }

  async getItems() {
    console.log('called getItems')
    return await this.db.query
      .select("*")
      .from("mytable");
  }
}