import { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Container from "./components/cardContainer/container";
import BasicModal from "./components/modal/modal";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    cache: new InMemoryCache(),
    onError: ({ networkError, graphQLErrors }) => {
      console.log("graphQLErrors", graphQLErrors);
      console.log("networkError", networkError);
    },
  });
  const handleclose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <button className="app-button" onClick={() => setOpen(true)}>
          add a card
        </button>
        <BasicModal open={open} handleclose={handleclose} purpose="add" />
        <Container />
      </div>
    </ApolloProvider>
  );
}

export default App;
