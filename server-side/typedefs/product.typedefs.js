const { gql } = require("apollo-server");
const typeDefs = gql`
  type Product {
    id: ID!
    name: String
    desc: String
    status: String
    image: String
    languages: [String]
  }
  type Query {
    getProducts: [Product]
    getProduct(id: ID!): Product
  }
  type Mutation {
    addProduct(
      name: String
      desc: String
      status: String
      image: String
      languages: [String]
    ): Product
    updateProduct(
      id: ID
      name: String
      desc: String
      status: String
      image: String
      languages: [String]
    ): Product
    deleteProduct(id: ID!): Product
  }
`;
module.exports = typeDefs;
