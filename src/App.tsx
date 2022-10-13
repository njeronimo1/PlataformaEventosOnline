import { client } from "./lib/apollo";
import { Router } from "./Router";

import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  )
}

export default App
