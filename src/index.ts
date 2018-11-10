import { ApolloServer, gql } from "apollo-server";
// import { importSchema } from 'graphql-import'
// const { ApolloServer, gql } = require('apollo-server-express');
// import schema from './schema/schema'
import { books } from "./data/books";

const typeDefs = gql`
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

// const typeDefs = gql`${schema}`

const resolvers = {
  Query: {
    books: () => books
  }
};

const graphQLServer = new ApolloServer({ typeDefs, resolvers });

graphQLServer.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
