import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import BasicModal from "./components/modal/modal";
import { client } from "./apollo-client";
import "./App.css";
import MainPage from "./pages/mainPage";
import Layout from "./components/layout/layout";

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <MainPage />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
