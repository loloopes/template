import { LooseObject } from "utilities"

export const resolvers = {
  Query: {
    hello: async (
      _parent: LooseObject,
      _args: LooseObject,
      _context: LooseObject
    ) => {
      return {
        message: 'A word from Apollo 1: Foo Bar!'
      }
    },
  },
}
