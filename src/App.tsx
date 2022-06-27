import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react"
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";
import { Router } from "./Router";

import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Event/> */}
      <Router />
    </ApolloProvider>
  )
}

export default App
