/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@primer/react';
import { FieldNode, Kind, SelectionSetNode } from 'graphql';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import {
  queryDescriptionsVar,
  queryMetaPolicy,
} from './cache_policies/queryMeta';
import { App } from './components';

type OnFieldOptions = {
  fieldName: string;
  selectionSet: SelectionSetNode;
  read: () => any;
};

/**
 * Takes a selectionSet: SelectionSetNode and returns an object with
 * every selection in the selectionSet.selections keyed by selection.name
 * if the selection has a selection.selectionSet, it will be recursively
 * called until the selection.selectionSet is null.
 */
export function getFields(
  selectionSet: SelectionSetNode | undefined
): Record<string, FieldNode> | undefined {
  if (typeof selectionSet === 'undefined') {
    return undefined;
  }
  const fields: Record<string, object> = {};
  const { selections } = selectionSet;

  // Not fragments or inline fragments
  const fieldSelections = selections.filter(
    (selection) => selection.kind === Kind.FIELD
  );
  if (Array.isArray(fieldSelections) && fieldSelections.length > 0) {
    fieldSelections.forEach((selection) => {
      const selectionNode = selection as FieldNode;
      const name = selectionNode.name.value;
      fields[name] = {
        ...selectionNode,
        selections: getFields(selectionNode.selectionSet),
      };
    });
  } else {
    return undefined;
  }
  return fields as Record<string, FieldNode>;
}

/**
 * Takes inputs:
 * - fieldName of type string to check for in the selectionSet
 * - selection set of type SelectionSetNode to check for fieldName
 * - read function of type () => any to run if fieldName is found
 */
export function onField({ fieldName, selectionSet, read }: OnFieldOptions) {}
// todo implement

const cache = new InMemoryCache({
  addTypename: true,
  typePolicies: {
    // __Type: {
    //   fields: {
    //     fields: {
    //       // eslint-disable-next-line @typescript-eslint/default-param-last
    //       merge(existing = [], incoming, options) {
    //         queryMetaPolicy(existing, incoming, options);
    //         return [...existing, ...incoming];
    //       },
    //       ...queryMetaPolicy,
    //     },
    //   },
    // },
    Query: {
      fields: {
        GetDescriptions: {
          read(existing, options) {
            return queryDescriptionsVar();
          },
        },
      },
    },
    GetDescriptions: {
      fields: {
        name: {
          read() {
            console.log('GetDescriptions name read');
            return 'name';
          },
        },
        kind: {
          read() {
            console.log('GetDescriptions kind read');
            return 'kind';
          },
        },
        returnType: {
          read() {
            console.log('GetDescriptions returnType read');

            return 'returnType';
          },
        },
      },
    },
  },
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
