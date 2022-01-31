import { useQuery, gql, ApolloError } from '@apollo/client';
import { useState } from 'react';

export function useFieldsForModel(modelName?: string, skip?: boolean) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApolloError | Error | undefined>(
    undefined
  );
  const [fieldsState, setFieldsState] = useState([]);
  /**
   * Get all fields existing on the selected model
   */
  const {
    data: queryData,
    loading: queryLoading,
    // error: queryError,
  } = useQuery(
    gql`
      query GetFields($modelName: String!) {
        __type(name: $modelName) {
          fields {
            name
          }
        }
      }
    `,
    {
      variables: {
        modelName,
      },
      skip: skip || modelName === undefined,
      onCompleted: (data) => {
        // Destructure the fields from the query
        let {
          __type: { fields },
        } = data ?? { __type: { fields: undefined } };
        fields = fields
          ? fields.map((field: { name: string }) => {
              return field.name;
            })
          : undefined;

        if (fields !== undefined) {
          setFieldsState(fields);
          setLoading(false);
        } else {
          setError(
            new Error(`
            Error occured while destructuring fields.\n
            Query succeeded with response: \n
            ${JSON.stringify(data, null, 2)}\n
            Yet fields were undefined.
          `)
          );
        }
      },
      onError: (err) => {
        setError(err);
      },
    }
  );

  if (!queryData && !skip && queryLoading && !loading) {
    setLoading(true);
  }
  return {
    data: fieldsState,
    loading,
    error,
  };
}
