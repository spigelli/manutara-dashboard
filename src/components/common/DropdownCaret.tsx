import { TriangleDownIcon } from '@primer/octicons-react';
import { Button, ButtonProps, StyledOcticon } from '@primer/react';
import { forwardRef } from 'react';

/*
 * This component encapsulates the button used to open single and multi-select dropdown menus.
 */
export const DropdownCaret = forwardRef<HTMLElement, ButtonProps>(
  ({ ...props }, ref) => (
    <Button
      {...props}
      sx={{
        border: 'none',
        boxShadow: 'none',
        minWidth: '16px',
        p: 0,
        ml: 'auto',
        bg: 'transparent',
        ':hover': {
          bg: 'transparent',
          boxShadow: 'none',
        },
      }}
      role="button"
      aria-label="Dropdown button"
      ref={ref}
    >
      <StyledOcticon
        icon={TriangleDownIcon}
        className="table-row-dropdown-caret"
        size="small"
        sx={{
          verticalAlign: 'middle',
          color: 'fg.muted',
          opacity: 0.3,
          '.is-focused &': { opacity: 1 },
        }}
      />
    </Button>
  )
);

DropdownCaret.displayName = 'DropdownCaret';
