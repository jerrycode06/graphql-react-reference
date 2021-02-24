const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;

// Dummy Data
var books = [
  { name: "Think and Grow Rich", genre: "Inspirational", id: "1" },
  { name: "Lord of the Rings", genre: "Fantasy", id: "2" },
  {
    name: "How to Win Friends and Influence People",
    genre: "Inspirational",
    id: "3",
  },
];

var author = [
  { name: "Napolean Hill", age: 65, id: "1" },
  { name: "JRR Tolkein", age: 55, id: "2" },
  { name: "Dale Carenegie", age: 65, id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db or other source
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(author, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
