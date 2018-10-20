import { makeExecutableSchema } from 'graphql-tools'
import Book from './book'

const Query = `
   type Query {
      books: [Book]
   }
`

const SchemaDefinition = `
  schema {
    query: Query
  }
`

export default makeExecutableSchema({
   typeDefs: [
     SchemaDefinition, Query,
     // we have to destructure array imported from the post.js file
     // as typeDefs only accepts an array of strings or functions
     ...Book
   ],
   // we could also concatenate arrays
   // typeDefs: [SchemaDefinition, RootQuery].concat(Post)
   resolvers: {},
 })