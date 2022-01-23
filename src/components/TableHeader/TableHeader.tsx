import { Box, TextInput, Tooltip } from '@primer/react';

export default function TableHeader() {
  return (
    <Box
      sx={{
        px: [2, 3, 4, 5],
        py: 3,
        backgroundColor: 'canvas.inset',
        fontWeight: 600,
      }}
    >
      <Tooltip
        aria-label="Hello, Tooltip!"
        direction="se"
        sx={{
          width: '100%',
        }}
      >
        <style>
          {`
                input {
                  font-weight: 600 !important;
                  padding: 0 !important;
                }
              `}
        </style>
        <TextInput
          block
          aria-label="Title"
          placeholder="Title"
          sx={{
            fontSize: '20px !important',
            fontWeight: '600 !important',
            backgroundColor: 'canvas.inset',
            border: 'none',
            minHeight: '30px',
          }}
        />
      </Tooltip>
    </Box>
  );
}
