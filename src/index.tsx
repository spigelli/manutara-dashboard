/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactDOM from 'react-dom';
import env from 'react-dotenv';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  makeVar,
} from '@apollo/client';
import { StrictMode } from 'react';
import { ThemeProvider } from '@primer/react';
import { App } from './components';
import {
  queryMetaPolicy,
  queryDescriptionsVar,
} from './cache_policies/queryMeta';

const cache = new InMemoryCache({
  addTypename: true,
  typePolicies: {
    __Type: {
      fields: {
        fields: {
          // eslint-disable-next-line @typescript-eslint/default-param-last
          merge(existing = [], incoming, options) {
            queryMetaPolicy(existing, incoming, options);
            return [...existing, ...incoming];
          },
          ...queryMetaPolicy,
        },
      },
    },
    Query: {
      fields: {
        descriptions: {
          read() {
            return queryDescriptionsVar();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  cache,
  uri: env.GQL_API_URL,
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
