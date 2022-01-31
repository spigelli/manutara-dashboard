import { Box } from '@primer/react';

export function Cell({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: any;
}) {
  return (
    <Box
      as="td"
      sx={{
        height: '37px',
        padding: '12px',
        fontSize: '14px',
        borderBottom: '1px solid',
        borderLeft: '1px solid',
        borderColor: 'border.muted',
        whiteSpace: 'nowrap',
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '12px',
          justifyContent: 'flex-start',
          alignItems: 'center',
          overflow: 'visible',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}