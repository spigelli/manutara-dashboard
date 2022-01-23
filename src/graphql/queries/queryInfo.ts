import { gql } from '@apollo/client';

export const QUERY_INFO = gql`
{
  schema: __type(name: "Query") {
    queries: fields {
      name
      description
      arguments: args{
        name
      }
      returnType: type {
        kind
        name
        ofType {
          __typename
          kind
          name
        }
      }    
    }
  }
}
`;