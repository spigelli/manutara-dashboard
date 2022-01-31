import { Box, useTheme } from '@primer/react';

export function HeaderCell({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <Box
      as="th"
      sx={{
        fontSize: '12px',
        fontWeight: 'bold',
        px: '12px',
        py: 2,
        textAlign: 'left',
        color: 'fg.muted',
        borderLeft: '1px solid',
        borderColor: 'border.muted',
        boxShadow: `${theme?.colors.border.default} inset 0 -2px 0 0`,
      }}
    >
      {children}
    </Box>
  );
}
