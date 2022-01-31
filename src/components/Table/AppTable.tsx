/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloError, gql, useQuery, useReactiveVar } from '@apollo/client';
import { withDisplayQueryName } from '../withDisplayQueryName/withDisplayQueryName';
import { selectedModelNameVar } from '../../hooks/selectedModelName';
import { TBody } from './GithubTable/TBody';
import { Row } from './GithubTable/Row';
import { Cell } from './GithubTable/Cell';
import { HeaderRow } from './GithubTable/HeaderRow';
import { HeaderCell } from './GithubTable/HeaderCell';

export interface AppTableProps {
  title: string;
  queryName: string;
  queryNameLoading: boolean;
  queryNameError: ApolloError | undefined;
}

const borderStyles = {
  border: '1px solid',
  borderColor: '#ffffff',
  borderRadius: '2px',
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Table({ title, ...displayQuery }: AppTableProps) {
  /**
   * Get the selected model name
   */
  const selectedModelName = useReactiveVar(selectedModelNameVar);

  /**
   * Get all fields existing on the selected model
   */
  const {
    data: fieldsData,
    loading: fieldsLoading,
    error: fieldsError,
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
        modelName: selectedModelName,
      },
      skip:
        displayQuery.queryNameLoading ||
        displayQuery.queryNameError !== undefined ||
        selectedModelName === undefined,
    }
  );

  // Destructure the fields from the query
  let {
    __type: { fields },
  } = fieldsData ?? { __type: { fields: undefined } };
  fields = fields
    ? fields.map((field: { name: string }) => {
        return field.name;
      })
    : undefined;

  /**
   * With the fields, we can now run the query for all data on the selected model
   */
  const { data, loading, error } = useQuery(
    gql`
      query GetTableData {
        ${displayQuery.queryName} {
          ${fields?.join('\n')}
        }
      }
    `,
    {
      skip:
        displayQuery.queryNameLoading ||
        displayQuery.queryNameError !== undefined ||
        fieldsLoading ||
        fieldsError !== undefined ||
        fields === undefined ||
        selectedModelName === undefined,
    }
  );

  return (
    <table style={{ width: '1740px' }}>
      <thead>
        <HeaderRow>
          {fields?.map((field: string) => (
            <HeaderCell key={field}>{field}</HeaderCell>
          ))}
        </HeaderRow>
      </thead>
      <TBody>
        {data?.homes?.map((row: Record<string, any>) => (
          <Row key={row.id}>
            {Object.keys(row).map((field: string) => (
              <Cell key={`${row.id}-${field}`}>{row[field]}</Cell>
            ))}
          </Row>
        ))}
      </TBody>
    </table>
  );
}

export const AppTable = withDisplayQueryName<AppTableProps>({
  component: Table,
  getModelName: () => selectedModelNameVar() ?? '',
  displayType: 'table',
});
