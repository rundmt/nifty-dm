import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import PROTOCOLS, {CURRENT_PROTOCOL} from "./constants";
import "./index.css";
import App from "./App";

// You should replace this url with your own and put it into a .env file
// See all subgraphs: https://thegraph.com/explorer/
const client = new ApolloClient({
  uri: PROTOCOLS[CURRENT_PROTOCOL].URI,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App subgraph={PROTOCOLS[CURRENT_PROTOCOL].SUBGRAPH} />
  </ApolloProvider>,
  document.getElementById("root"),
);
