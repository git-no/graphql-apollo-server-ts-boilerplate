"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];
const typeDefs = apollo_server_1.gql ` 
   # This "Book" type can be used in other type declarations.
   type Book {
      title: String
      author: String
   }

   # The "Query" type is the root of all GraphQL queries.
   # (A "Mutation" type will be covered later on.)
   type Query {
      books: [Book]
   }
`;
const resolvers = {
    Query: {
        books: () => books,
    },
};
const graphQLServer = new apollo_server_1.ApolloServer({ typeDefs, resolvers });
graphQLServer.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map