import { BaseStyles, Box, Spinner, useTheme } from '@primer/react';
import { gql, useQuery } from '@apollo/client';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import MenuPane from '../MenuPane/MenuPane';
import { PageNav } from '../PageNav/PageNav';
import { Table } from '../Table/Table';
import TableHeader from '../TableHeader/TableHeader';

export function App() {
  const { data, loading, error } = useQuery(
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

  // const { data: result } = useQuery(gql`
  //  {
  //    descriptors @client {
  //      name
  //    }
  //  }
  // `);
  // console.log(result);

  if (error) {
    console.log(error);
  }
  console.log(data);

  const { theme } = useTheme();
  return (
    <Box height="100% !important" backgroundColor="canvas.inset">
      <BaseStyles className="full-height">
        <HeaderNav />
        <TableHeader />
        {loading ? (
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
              <MenuPane
                sx={{
                  float: 'right',
                  width: '360px',
                }}
              />
            </Box>
          </>
        )}
      </BaseStyles>
    </Box>
  );
}
