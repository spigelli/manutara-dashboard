/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement } from 'react';
import { useQuery, gql } from '@apollo/client';

export interface TableProps {
  name: string;
  description: string;
  args: any[];
  type: any;
  selectedEntityName: string;
  fieldsString: string;
  fields: string[];
}

export function Table({
  name,
  description,
  args,
  type,
  selectedEntityName,
  fieldsString,
  fields,
}: TableProps): ReactElement {
  const { data } = useQuery(
    gql`
        query GetSelectedPaginated(
          $page: Int
          $perPage: Int
          $sortField: String
          $sortOrder: String
        ) {
          ${selectedEntityName}(
            page: $page
            perPage: $perPage
            sortField: $sortField
            sortOrder: $sortOrder
          ) {
            ${fields}
          }
        }
      `,
    {
      variables: {
        page: 0,
        perPage: 10,
      },
      skip: !selectedEntityName,
    }
  );
  return (
    <div>
      {data && data[name] && (
        <table>
          <thead>
            <tr>
              {fields.map((field: string) => (
                <th key={field}>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data[name]?.map((item: any) => (
              <tr key={`row-${item.id}`}>
                {fields.map((field: string) => (
                  <td key={`row-${item.id}-${field}`}>{item[field]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
