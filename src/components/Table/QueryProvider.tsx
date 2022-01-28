import { useQuery, gql } from '@apollo/client';
import { Spinner } from '@primer/react';
import { Children, FunctionComponent } from 'react';

export interface QChild {
  query: string;
}

export type QueryProviderProps = {
  /**
   * Searches for the query on this model
   */
  modelName: string;

  /**
   * The display type determines which of query to generate
   */
  displayType: 'table' | 'search';

  /**
   * A single child gets passed the query via the query prop.
   */
  children: FunctionComponent<QChild>;
};

// Will add more mappings here as needed
const displayTypeToQueryKind: Record<string, string> = {
  table: 'LIST_ALL',
  search: 'SEARCH',
};

// Some garbage to use destructuring
const dataIfUndefined = {
  model: {
    queries: [
      {
        name: null,
      },
    ],
  },
};

export function QueryProvider({
  modelName,
  displayType,
  children,
}: QueryProviderProps) {
  const { data, loading, error } = useQuery(
    gql`
      query TableQuery($modelName: String!) {
        model(name: $modelName) {
          queries(kind: $kind) {
            name
          }
        }
      }
    `,
    {
      variables: {
        modelName,
        kind: displayTypeToQueryKind[displayType],
      },
    }
  );
  const {
    model: {
      queries: [{ name }],
    },
  } = data || dataIfUndefined;

  if (loading) {
    return (
      <Spinner
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      />
    );
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!name) {
    return <p>No queries found</p>;
  }

  // Takes Function Components as children
  return Children.only(children)({ query: name });
}
