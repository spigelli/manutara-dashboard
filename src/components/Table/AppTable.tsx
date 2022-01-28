import { ApolloError } from '@apollo/client';
import { withDisplayQueryName } from '../withDisplayQueryName/withDisplayQueryName';

export interface AppTableProps {
  title: string;
  queryName: string;
  queryNameLoading: boolean;
  queryNameError: ApolloError | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Table({ title, ...displayQuery }: AppTableProps) {
  return <h1>{title}</h1>;
}

export const AppTable = withDisplayQueryName<AppTableProps>({
  component: Table,
  getModelName: () => 'Home',
  displayType: 'table',
});

// export const PaginatedTable = withDisplayQueryName<AppTableProps>({
//   component: Table,
//   getModelName: () => 'Home',
//   displayType: 'table/paginated',
// });
