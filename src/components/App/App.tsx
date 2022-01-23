import { useQuery } from '@apollo/client';
import { BaseStyles, Box, Spinner, useTheme } from '@primer/react';
import { QUERY_INFO } from '../../graphql/queries/queryInfo';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import MenuPane from '../MenuPane/MenuPane';
import { PageNav } from '../PageNav/PageNav';
import { Table } from '../Table/Table';
import TableHeader from '../TableHeader/TableHeader';

export function App() {
  const { loading, error } = useQuery(QUERY_INFO);
  if (error) {
    console.log(error);
  }

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
                height: '100%'
              }}
            >
              <Box
                sx={{
                  backgroundColor: `${theme?.colors.canvas.default}`,
                  width: '100%'
                }}
              >
                <Table />
              </Box>
              <MenuPane
                sx={{
                  float: 'right',
                  width: '360px'
                }}
              />
            </Box>
          </>
        )}
      </BaseStyles>
    </Box>
  );
}
