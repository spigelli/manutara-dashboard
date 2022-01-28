import { ApolloError, gql, useQuery } from '@apollo/client';
import { PropsWithChildren } from 'react';

import { displayTypeToQueryKind } from '../../types/displayTypes';

type PropsAreEqual<P> = (
  prevProps: Readonly<P>,
  nextProps: Readonly<P>
) => boolean;

type GetDisplayQueryVars = {
  modelName: string;
  kind: string;
};

export interface DisplayQueryProps extends Record<string, any> {
  /**
   * The name of the query to run
   */
  queryName?: string;

  /**
   * Whether the query for the name of the query is loading
   */
  queryNameLoading: boolean;

  /**
   * The error if the query for the name of the query failed
   */
  queryNameError?: ApolloError | undefined;
}

export type WithDisplayQueryOptions<P> = {
  /**
   * The component to inject the query prop into
   */
  component: any;

  /**
   * Generate a query for the specified model name
   */
  getModelName: () => string;

  /**
   * The display type determines which of query to generate
   */
  displayType: NonNullable<string>;

  /**
   * Function that tests whether the props of lower-order component have changed
   * in order to memoize the generated wrapped component
   */
  propsAreEqual?: PropsAreEqual<P> | false;

  /**
   * Optional component name in order to display as withDisplayQuery(MyComponent)
   * in development tools
   */
  componentName?: string;
};

// Some garbage to use destructuring
const dataIfUndefined = {
  model: {
    queries: [
      {
        name: undefined,
      },
    ],
  },
};

interface GetDisplayQueryResponse {
  model: {
    queries: [{ name: string }];
  };
}

/**
 * Props for the component that is returned by the withDisplayQuery HOC
 */
type WithDisplayUsageProps<P> = Omit<P, keyof DisplayQueryProps>;

/**
 * Props for components that are wrapped by the withDisplayQuery HOC
 */
type WithDisplayDefinitionProps<P> = P & DisplayQueryProps;

export function withDisplayQueryName<P extends DisplayQueryProps>({
  component,
  getModelName,
  displayType,
}: WithDisplayQueryOptions<P>): typeof component {
  /**
   * Issue query for the query name for the specified model name and display type
   */
  function WithDisplayType(props: WithDisplayUsageProps<P>) {
    const { data, loading, error } = useQuery<
      GetDisplayQueryResponse,
      GetDisplayQueryVars
    >(
      gql`
        query GetDisplayQuery($modelName: String!, $kind: String!) {
          model(name: $modelName) {
            queries(kind: $kind) {
              name
            }
          }
        }
      `,
      {
        variables: {
          modelName: getModelName(),
          kind: displayTypeToQueryKind[displayType],
        },
      }
    );

    // Destructure the data from the query
    const {
      model: {
        queries: [{ name }],
      },
    } = data ?? dataIfUndefined;

    // Set the props of the wrapped component with the result of the query
    // for the name of the query hook
    const newProps = {
      ...props,
      queryName: name,
      queryNameLoading: loading,
      queryNameError: error,
    } as PropsWithChildren<WithDisplayDefinitionProps<P>>;
    return <>{component(newProps)}</>;
  }

  WithDisplayType.displayName = `withSampleHoC()`;

  // copyStaticProperties(component, wrappedComponent);
  return WithDisplayType;
}
