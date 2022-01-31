import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@primer/react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { App } from './components';

const cache = new InMemoryCache({
  addTypename: false,
  typePolicies: {},
});

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql',
  connectToDevTools: true,
  queryDeduplication: true,
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider colorMode="night">
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
);
