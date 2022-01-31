import { Box } from '@primer/react';

export function TBody({ children }: { children: React.ReactNode }) {
  return <Box as="tbody">{children}</Box>;
}
