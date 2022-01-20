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
      types {
        kind
        name
        possibleTypes {
          name
        }
      }
    }
  }
`;
