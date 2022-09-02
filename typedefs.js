const { gql } = require("apollo-server");
const typeDefs = gql`
  type Product {
    id: ID!
    title: String
    desc: String
    status: String
    languages: [String]
  }
  type Query {
    getProducts: [Product]
    getProduct(id: ID!): Product
  }
  type Mutation {
    addProduct(
      title: String
      desc: String
      status: String
      languages: [String]
    ): Product
    updateProduct(
      id: ID
      title: String
      desc: String
      status: String
      languages: [String]
    ): Product
    deleteProduct(id: ID!): Product
  }
`;
module.exports = typeDefs;
