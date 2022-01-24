import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Descriptor = {
  __typename?: 'Descriptor';
  kind?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  returnType?: Maybe<Scalars['String']>;
};

export enum QKind {
  Entity = 'ENTITY',
  EntityFilter = 'ENTITY_FILTER',
  EntityKeys = 'ENTITY_KEYS',
  EntityList = 'ENTITY_LIST',
  PaginatedEntityList = 'PAGINATED_ENTITY_LIST',
  Search = 'SEARCH',
}

export type QMeta = {
  __typename?: 'QMeta';
  entityName?: Maybe<Scalars['String']>;
  kind?: Maybe<QKind>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  Descriptors?: Maybe<Array<Maybe<Descriptor>>>;
  QueryMeta?: Maybe<Array<Maybe<QMeta>>>;
  queryMetaSetup?: Maybe<Scalars['String']>;
};

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
  __typename?: '__EnumValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
  __typename?: '__Field';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldArgsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
  __typename?: '__InputValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  __typename?: '__Type';
  kind: __TypeKind;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  specifiedByURL?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<__Field>>;
  interfaces?: Maybe<Array<__Type>>;
  possibleTypes?: Maybe<Array<__Type>>;
  enumValues?: Maybe<Array<__EnumValue>>;
  inputFields?: Maybe<Array<__InputValue>>;
  ofType?: Maybe<__Type>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeInputFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  Interface = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = 'NON_NULL',
}

export type QMetaSetupFragment = {
  __typename?: '__Type';
  fields?:
    | Array<{
        __typename?: '__Field';
        name: string;
        description?: string | null | undefined;
        args: Array<{ __typename?: '__InputValue'; name: string }>;
        type: {
          __typename?: '__Type';
          kind: __TypeKind;
          name?: string | null | undefined;
          ofType?:
            | {
                __typename: '__Type';
                kind: __TypeKind;
                name?: string | null | undefined;
              }
            | null
            | undefined;
        };
      }>
    | null
    | undefined;
};

export type QueryMetaSetupQueryVariables = Exact<{ [key: string]: never }>;

export type QueryMetaSetupQuery = {
  __typename?: 'Query';
  __type?:
    | {
        __typename?: '__Type';
        fields?:
          | Array<{
              __typename?: '__Field';
              name: string;
              description?: string | null | undefined;
              args: Array<{ __typename?: '__InputValue'; name: string }>;
              type: {
                __typename?: '__Type';
                kind: __TypeKind;
                name?: string | null | undefined;
                ofType?:
                  | {
                      __typename: '__Type';
                      kind: __TypeKind;
                      name?: string | null | undefined;
                    }
                  | null
                  | undefined;
              };
            }>
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type AllDescriptorsQueryVariables = Exact<{ [key: string]: never }>;

export type AllDescriptorsQuery = {
  __typename?: 'Query';
  Descriptors?:
    | Array<
        | {
            __typename?: 'Descriptor';
            name?: string | null | undefined;
            kind?: string | null | undefined;
            returnType?: string | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export const QMetaSetupFragmentDoc = gql`
  fragment QMetaSetup on __Type {
    fields {
      name
      description
      args {
        name
      }
      type {
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
`;
export const QueryMetaSetupDocument = gql`
  query queryMetaSetup {
    __type(name: "Query") {
      ...QMetaSetup
    }
  }
  ${QMetaSetupFragmentDoc}
`;

/**
 * __useQueryMetaSetupQuery__
 *
 * To run a query within a React component, call `useQueryMetaSetupQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryMetaSetupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryMetaSetupQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryMetaSetupQuery(
  baseOptions?: Apollo.QueryHookOptions<
    QueryMetaSetupQuery,
    QueryMetaSetupQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<QueryMetaSetupQuery, QueryMetaSetupQueryVariables>(
    QueryMetaSetupDocument,
    options
  );
}
export function useQueryMetaSetupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    QueryMetaSetupQuery,
    QueryMetaSetupQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<QueryMetaSetupQuery, QueryMetaSetupQueryVariables>(
    QueryMetaSetupDocument,
    options
  );
}
export type QueryMetaSetupQueryHookResult = ReturnType<
  typeof useQueryMetaSetupQuery
>;
export type QueryMetaSetupLazyQueryHookResult = ReturnType<
  typeof useQueryMetaSetupLazyQuery
>;
export type QueryMetaSetupQueryResult = Apollo.QueryResult<
  QueryMetaSetupQuery,
  QueryMetaSetupQueryVariables
>;
export const AllDescriptorsDocument = gql`
  query allDescriptors {
    Descriptors {
      name
      kind
      returnType
    }
  }
`;

/**
 * __useAllDescriptorsQuery__
 *
 * To run a query within a React component, call `useAllDescriptorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllDescriptorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllDescriptorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllDescriptorsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllDescriptorsQuery,
    AllDescriptorsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllDescriptorsQuery, AllDescriptorsQueryVariables>(
    AllDescriptorsDocument,
    options
  );
}
export function useAllDescriptorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllDescriptorsQuery,
    AllDescriptorsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllDescriptorsQuery, AllDescriptorsQueryVariables>(
    AllDescriptorsDocument,
    options
  );
}
export type AllDescriptorsQueryHookResult = ReturnType<
  typeof useAllDescriptorsQuery
>;
export type AllDescriptorsLazyQueryHookResult = ReturnType<
  typeof useAllDescriptorsLazyQuery
>;
export type AllDescriptorsQueryResult = Apollo.QueryResult<
  AllDescriptorsQuery,
  AllDescriptorsQueryVariables
>;

export const ApolloTypedefsDocument = gql`
  schema {
    query: Query
  }

  type Descriptor {
    kind: String
    name: String
    returnType: String
  }

  enum QKind {
    ENTITY
    ENTITY_FILTER
    ENTITY_KEYS
    ENTITY_LIST
    PAGINATED_ENTITY_LIST
    SEARCH
  }

  type QMeta {
    entityName: String
    kind: QKind
    name: String
  }

  type Query {
    Descriptors: [Descriptor]
    QueryMeta: [QMeta]
    queryMetaSetup: String
  }
`;
