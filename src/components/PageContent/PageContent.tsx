/* eslint-disable @typescript-eslint/no-unused-vars */
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { Text } from '@primer/react';
import { ReactElement, useState } from 'react';
import { Table } from '../Table/Table';

interface PageContentProps {
  selectedEntityName: string;
}

export function PageContent({
  selectedEntityName,
}: PageContentProps): ReactElement {
  const { data, loading, error } = useQuery(
    gql`
      query GetSelectedEntityType {
        __schema {
          queryType {
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
                  fields {
                    name
                    description
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  // eslint-disable-next-line no-underscore-dangle
  const queries = data?.__schema?.queryType?.fields;
  const thisQuery = queries?.find(
    (query: any) => query.name === selectedEntityName
  );
  return (
    <Text>
      <p>This is the PageContent component.</p>
      <p>{true && 'loading'}</p>
      {thisQuery && (
        <Table
          name={thisQuery.name}
          description={thisQuery.description}
          args={thisQuery.args}
          type={thisQuery.type}
          fields={
            thisQuery.type?.ofType?.fields?.map((field: any) => field.name) || [
              '__typename',
            ]
          }
          fieldsString={
            thisQuery.type?.ofType?.fields
              ?.map((field: any) => field.name)
              .join(' ') || '__typename'
          }
          selectedEntityName={selectedEntityName}
        />
      )}
    </Text>
  );
}
