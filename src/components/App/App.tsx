import { gql, useQuery } from '@apollo/client';
import { BaseStyles, Box, Spinner, useTheme } from '@primer/react';

import { HeaderNav } from '../HeaderNav/HeaderNav';
import { PageNav } from '../PageNav/PageNav';
import { AppSidebar } from '../Sidebar/AppSidebar';
import TableHeader from '../TableHeader/TableHeader';
import { AppTable } from '../Table/AppTable';
// import { GithubTable } from '../GithubTable/GithubTable';

export function App() {
  const { theme } = useTheme();

  type Model = {
    id: string;
    name: string;
  };
  const { data, loading, error } = useQuery(
    gql`
      query GetModelNames {
        models {
          name
        }
      }
    `
  );

  const names: string[] =
    data?.models?.map((m: Omit<Model, 'id'>) => m.name) || [];

  return (
    <Box height="100% !important" backgroundColor="canvas.inset">
      <BaseStyles className="full-height">
        <HeaderNav />
        <TableHeader />
        {error && <p>Error: {error.message}</p>}
        {names.length === 0 || loading ? (
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
                className="full-height"
                sx={{
                  backgroundColor: `${theme?.colors.canvas.default}`,
                  width: '100%',
                  height: '100%',
                  overflow: 'scroll',
                }}
              >
                <AppTable title="Table" />
              </Box>
              {/* <GithubTable /> */}
              <AppSidebar entityNames={names} />
            </Box>
          </>
        )}
      </BaseStyles>
    </Box>
  );
}
