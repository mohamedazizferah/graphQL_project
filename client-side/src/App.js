import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import BasicModal from "./components/modal/modal";
import { client } from "./apollo-client";
import "./App.css";
import MainPage from "./pages/mainPage";

function App() {
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
        <BasicModal
          open={open}
          handleclose={handleclose}
          product={[]}
          purpose="add"
        />
        <MainPage />
      </div>
    </ApolloProvider>
  );
}

export default App;
