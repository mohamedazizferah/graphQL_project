const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./typeDefs/product.typedefs");
const resolvers = require("./resolvers/product.resolvers");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8000;
async function startApolloServer() {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
  mongoose
    .connect(
      "mongodb+srv://admin:admin@cluster0.1wnel.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    )
    .then(() => console.log("DB connection succesful! "));
  app.listen(port, () => {
    console.log(`App running on ${port}...`);
  });
}
startApolloServer();
