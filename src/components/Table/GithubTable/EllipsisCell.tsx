import { Truncate } from '@primer/react';
import { Cell } from './Cell';

export type EllipsisCellProps = {
  width: number | string;
  children: React.ReactNode;
  keyName: string;
};
export function EllipsisCell({ width, children, keyName }: EllipsisCellProps) {
  return (
    <Cell key={`${keyName}-id`} sx={{ width }}>
      <Truncate
        expandable
        title={`${keyName}`}
        maxWidth={width}
        sx={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          width: '100px',
          display: 'block',
          overflow: 'hidden',
          '&:hover': {
            width: 'unset',
          },
        }}
      >
        {children}
      </Truncate>
    </Cell>
  );
}
