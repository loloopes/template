import { LooseObject } from "utilities"
import { MyDataSource } from "./datasource.js";

export const resolvers = {
  Query: {
    hello: async (
      _parent: LooseObject,
      _args: LooseObject,
      _context: { db: MyDataSource }
    ) => {
      return await _context.db.getItems();
    },
  },
}
