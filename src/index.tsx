import ReactDOM from 'react-dom';
import env from 'react-dotenv';
import {
  ApolloClient,
  ApolloProvider,
} from '@apollo/client';
import { StrictMode } from 'react';
import { App } from './components';
import { cache } from './cache';

const client = new ApolloClient({
  cache,
  uri: env.GQL_API_URL,
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root'),
);

