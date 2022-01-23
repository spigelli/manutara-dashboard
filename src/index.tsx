import ReactDOM from 'react-dom';
import env from 'react-dotenv';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { StrictMode } from 'react';
import { ThemeProvider } from '@primer/react';
import { App } from './components';
import { clientSideSchema } from './graphql/clientSideSchema';

export type __Type = {
  kind: __TypeKind!
  name: String
  description: String

  # OBJECT and INTERFACE only
  fields(includeDeprecated: Boolean = false): [__Field!]

  # OBJECT only
  interfaces: [__Type!]

  # INTERFACE and UNION only
  possibleTypes: [__Type!]

  # ENUM only
  enumValues(includeDeprecated: Boolean = false): [__EnumValue!]

  # INPUT_OBJECT only
  inputFields: [__InputValue!]

  # NON_NULL and LIST only
  ofType: __Type
}

const cache = new InMemoryCache({
  typePolicies: {
    __Schema: {
      queryType: {
        merge(existing = [], incoming: any[]) {
          return [...existing, ...incoming];
        },
});

const client = new ApolloClient({
  cache,
  uri: env.GQL_API_URL,
  connectToDevTools: true,
  typeDefs: clientSideSchema,
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider colorMode="night">
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root'),
);
