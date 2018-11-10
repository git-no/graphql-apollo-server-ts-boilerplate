import { makeExecutableSchema, gql } from 'apollo-server'
// import Book from './book'
import { books } from '../data/books'

// const Query = `
//    type Query {
//       books: [Book]
//    }
// `

// const SchemaDefinition = `
//   schema {
//     query: Query
//   }
// `

const typeDefs = gql`
   type Book {
      title: String
      author: String
   }

   type Query {
      books: [Book]
   }
`

const resolvers = {
  Query: {
    books: () => books,
  },
}

export default makeExecutableSchema({
  typeDefs,
  resolvers,
 })