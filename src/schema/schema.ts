import { gql } from '@apollo/client';

export interface Schema {
  schema: any;
}

/**
 * @description This query returns the schema from the GraphQL service
 */
export const schemaQuery = gql`
  query GetSchema {
    __schema {
      queryType {
        fields {
          name
          description
          args {
            name
            description
            type {
              kind
              name
              inputFields {
                name
              }
              ofType {
                kind
                name
              }
            }
            defaultValue
          }
        }
      }
    }
  }
`;
