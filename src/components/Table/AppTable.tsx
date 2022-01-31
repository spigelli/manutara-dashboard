/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloError, gql, useQuery, useReactiveVar } from '@apollo/client';
import { Truncate, Box } from '@primer/react';
import { withDisplayQueryName } from '../withDisplayQueryName/withDisplayQueryName';
import { selectedModelNameVar } from '../../hooks/selectedModelName';
import { TBody } from './GithubTable/TBody';
import { Row } from './GithubTable/Row';
import { Cell } from './GithubTable/Cell';
import { HeaderRow } from './GithubTable/HeaderRow';
import { HeaderCell } from './GithubTable/HeaderCell';
import { EllipsisCell } from './GithubTable/EllipsisCell';
import { capitalize } from '../../helpers/common/capitalize';
import { useFieldsForModel } from '../../hooks/fieldsForModel';
import { RowActionMenu } from './GithubTable/RowActionMenu';

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

  const skipFields =
    displayQuery.queryNameLoading ||
    displayQuery.queryNameError !== undefined ||
    selectedModelName === undefined;

  const {
    data: fields,
    loading: fieldsLoading,
    error: fieldsError,
  } = useFieldsForModel(selectedModelName, skipFields);

  /**
   * With the fields, we can now run the query for all data on the selected model
   */
  const { data, loading, error } = useQuery(
    gql`
      query GetTableData {
        ${displayQuery.queryName} {
          ${fields?.join('\n') || 'name'}
        }
      }
    `,
    {
      skip:
        selectedModelName === undefined ||
        displayQuery.queryNameLoading ||
        displayQuery.queryNameError !== undefined ||
        fieldsLoading ||
        fieldsError !== undefined ||
        fields === undefined ||
        fields.length === 0,
    }
  );

  return (
    <table style={{ width: '1740px' }}>
      <thead>
        <HeaderRow>
          <HeaderCell key="ordinal">#</HeaderCell>
          {fields?.map((field: string) => (
            <HeaderCell key={field}>{capitalize(field)}</HeaderCell>
          ))}
        </HeaderRow>
      </thead>
      <TBody>
        {data?.homes?.map((row: Record<string, any>, index: number) => (
          <Row key={row.id}>
            <Cell
              key="ordinal"
              sx={{
                pl: '28px',
                width: '50px',
              }}
            >
              <RowActionMenu id={row.id} />
              {index + 1}
            </Cell>
            <EllipsisCell width={75} keyName={`${row.id}`}>
              {row.id}
            </EllipsisCell>
            {Object.keys(row)
              .filter((key) => key !== 'id')
              .map((field: string) => (
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
