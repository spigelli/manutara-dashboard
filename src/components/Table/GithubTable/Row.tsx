import { Box } from '@primer/react';

export function Row({ children }: { children: React.ReactNode }) {
  return (
    <Box
      as="tr"
      sx={{
        height: '37px',
        '&:hover': {
          bg: 'canvas.overlay',
        },
      }}
    >
      {children}
    </Box>
  );
}
