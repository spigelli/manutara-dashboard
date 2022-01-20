import ReactDOM from 'react-dom';
import env from 'react-dotenv';
import {
  ApolloClient,
  ApolloProvider,
} from '@apollo/client';
import { StrictMode } from 'react';
import { App } from './components';
import { cache } from './cache';
// import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
