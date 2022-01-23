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

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyProperty?: Maybe<Array<Maybe<Property>>>;
  createManyTenant?: Maybe<Array<Maybe<Tenant>>>;
  createProperty?: Maybe<Property>;
  createTenant?: Maybe<Tenant>;
  removeProperty?: Maybe<Property>;
  removeTenant?: Maybe<Tenant>;
  updateProperty?: Maybe<Property>;
  updateTenant?: Maybe<Tenant>;
};

export type MutationCreateManyPropertyArgs = {
  data?: InputMaybe<Array<InputMaybe<PropertyInput>>>;
};

export type MutationCreateManyTenantArgs = {
  data?: InputMaybe<Array<InputMaybe<TenantInput>>>;
};

export type MutationCreatePropertyArgs = {
  address: Scalars['String'];
  city: Scalars['String'];
  price: Scalars['String'];
  state: Scalars['String'];
  tenantIDs: Array<InputMaybe<Scalars['Int']>>;
  zip: Scalars['String'];
};

export type MutationCreateTenantArgs = {
  name: Scalars['String'];
};

export type MutationRemovePropertyArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveTenantArgs = {
  id: Scalars['ID'];
};

export type MutationUpdatePropertyArgs = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  price?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  tenantIDs?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  zip?: InputMaybe<Scalars['String']>;
};

export type MutationUpdateTenantArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type Property = {
  __typename?: 'Property';
  address: Scalars['String'];
  city: Scalars['String'];
  id: Scalars['ID'];
  price: Scalars['String'];
  state: Scalars['String'];
  tenantIDs: Array<Maybe<Scalars['Int']>>;
  zip: Scalars['String'];
};

export type PropertyFilter = {
  address?: InputMaybe<Scalars['String']>;
  address_neq?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  city_neq?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  price?: InputMaybe<Scalars['String']>;
  price_neq?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  state_neq?: InputMaybe<Scalars['String']>;
  tenantIDs?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tenantIDs_neq?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  zip?: InputMaybe<Scalars['String']>;
  zip_neq?: InputMaybe<Scalars['String']>;
};

export type PropertyInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  id: Scalars['ID'];
  price: Scalars['String'];
  state: Scalars['String'];
  tenantIDs: Array<InputMaybe<Scalars['Int']>>;
  zip: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Property?: Maybe<Property>;
  Tenant?: Maybe<Tenant>;
  _allPropertiesMeta?: Maybe<ListMetadata>;
  _allTenantsMeta?: Maybe<ListMetadata>;
  allProperties?: Maybe<Array<Maybe<Property>>>;
  allTenants?: Maybe<Array<Maybe<Tenant>>>;
};

export type QueryPropertyArgs = {
  id: Scalars['ID'];
};

export type QueryTenantArgs = {
  id: Scalars['ID'];
};

export type Query_AllPropertiesMetaArgs = {
  filter?: InputMaybe<PropertyFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};

export type Query_AllTenantsMetaArgs = {
  filter?: InputMaybe<TenantFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};

export type QueryAllPropertiesArgs = {
  filter?: InputMaybe<PropertyFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};

export type QueryAllTenantsArgs = {
  filter?: InputMaybe<TenantFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};

export type Tenant = {
  __typename?: 'Tenant';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TenantFilter = {
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_neq?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
};

export type TenantInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
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

export type QueryQueryQueryVariables = Exact<{ [key: string]: never }>;

export type QueryQueryQuery = {
  __typename?: 'Query';
  schema?:
    | {
        __typename?: '__Type';
        queries?:
          | Array<{
              __typename?: '__Field';
              name: string;
              description?: string | null | undefined;
              arguments: Array<{ __typename?: '__InputValue'; name: string }>;
              returnType: {
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

export const QueryQueryDocument = gql`
  query QueryQuery {
    schema: __type(name: "Query") {
      queries: fields {
        name
        description
        arguments: args {
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

/**
 * __useQueryQueryQuery__
 *
 * To run a query within a React component, call `useQueryQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    QueryQueryQuery,
    QueryQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<QueryQueryQuery, QueryQueryQueryVariables>(
    QueryQueryDocument,
    options
  );
}
export function useQueryQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    QueryQueryQuery,
    QueryQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<QueryQueryQuery, QueryQueryQueryVariables>(
    QueryQueryDocument,
    options
  );
}
export type QueryQueryQueryHookResult = ReturnType<typeof useQueryQueryQuery>;
export type QueryQueryLazyQueryHookResult = ReturnType<
  typeof useQueryQueryLazyQuery
>;
export type QueryQueryQueryResult = Apollo.QueryResult<
  QueryQueryQuery,
  QueryQueryQueryVariables
>;
