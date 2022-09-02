const { gql } = require("apollo-server");
const typeDefs = gql`
  type Product {
    id: ID!
    title: String
    desc: String
    languages: [String]
  }
  type Query {
    getProducts: [Product]
    getProduct(id: ID!): Product
  }
  type Mutation {
    addProduct(title: String!, desc: String!, languages: [String]!): Product
    updateProduct(title: String!, desc: String!, languages: [String]): Product
    deleteProduct(id: ID!): Product
  }
`;
export default typeDefs;
