import { gql, useQuery } from '@apollo/client';
import { BaseStyles, Box, Spinner, useTheme } from '@primer/react';

import { HeaderNav } from '../HeaderNav/HeaderNav';
import { PageNav } from '../PageNav/PageNav';
import Sidebar, { SidebarItem } from '../Sidebar/Sidebar';
import { Table } from '../Table/Table';
import TableHeader from '../TableHeader/TableHeader';
import { queryDescriptionsVar } from '../../cache_policies/queryMeta';

export function App() {
  useQuery(
    gql`
      query GetMeta {
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
    `
  );
  const entityNames = Array<string>();
  const data = queryDescriptionsVar();
  if (data.length > 0) {
    data.forEach((query: any) => {
      if (query.kind === 'ENTITY' && query.name) {
        entityNames.push(query.name);
      }
    });
  }

  const { theme } = useTheme();
  return (
    <Box height="100% !important" backgroundColor="canvas.inset">
      <BaseStyles className="full-height">
        <HeaderNav />
        <TableHeader />
        {data.length === 0 ? (
          <Spinner />
        ) : (
          <>
            <PageNav />
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  backgroundColor: `${theme?.colors.canvas.default}`,
                  width: '100%',
                }}
              >
                <Table />
              </Box>
              <Sidebar
                title="Queryable Types"
                sx={{
                  float: 'right',
                  width: '360px',
                }}
              >
                {entityNames.map((entityName) => (
                  <SidebarItem
                    key={entityName}
                    title={entityName}
                    href={`/query/${entityName}`}
                    selected={false}
                  />
                ))}
              </Sidebar>
            </Box>
          </>
        )}
      </BaseStyles>
    </Box>
  );
}
