import { TabNav, Box, Text, StyledOcticon } from '@primer/react';
import { TableIcon } from '@primer/octicons-react';

export function PageNav() {
  return (
    <TabNav sx={{ px: 5 }}>
      <TabNav.Link selected>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Text sx={{ fontSize: 1, mr: 3 }}>
            <StyledOcticon icon={TableIcon} sx={{ mr: 2 }} />
            Explorer
          </Text>
        </Box>
      </TabNav.Link>
      <TabNav.Link>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Text sx={{ fontSize: 1, mr: 3 }}>
            <StyledOcticon icon={TableIcon} sx={{ mr: 2 }} />
            Mutation Builder
          </Text>
        </Box>
      </TabNav.Link>
      <TabNav.Link>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Text sx={{ fontSize: 1, mr: 3 }}>
            <StyledOcticon icon={TableIcon} sx={{ mr: 2 }} />
            Check Health
          </Text>
        </Box>
      </TabNav.Link>
    </TabNav>
  );
}
