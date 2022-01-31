import { ActionMenu, ActionList } from '@primer/react/lib-esm/drafts';
import { ButtonInvisible, StyledOcticon, Box } from '@primer/react';
import { TriangleDownIcon } from '@primer/octicons-react';
import { useMutation, gql } from '@apollo/client';

export type RowActionMenuProps = {
  id: string;
};

export function RowActionMenu({ id }: RowActionMenuProps): React.ReactElement {
  const [runDelete, { data: status }] = useMutation(
    gql`
      mutation DeleteHome($id: ID!) {
        deleteHome(id: $id)
      }
    `,
    {
      variables: { id },
      onCompleted: () => {
        console.log('deleteHome mutation completed');
        console.log(status);
      },
    }
  );
  return (
    <Box
      sx={{
        width: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActionMenu>
        <ActionMenu.Anchor>
          <ButtonInvisible
            as="summary"
            variant="small"
            aria-label="Open column options"
            sx={{
              position: 'absolute',
              left: '12px',
              width: '0px',
              height: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0px',
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'text.muted',
              },
              color: 'fg.subtle',
            }}
          >
            <StyledOcticon icon={TriangleDownIcon} />
          </ButtonInvisible>
        </ActionMenu.Anchor>
        <ActionMenu.Overlay>
          <ActionList>
            <ActionList.Item variant="danger" onSelect={() => runDelete()}>
              Delete Row
            </ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </Box>
  );
}

/*

        sx={{
          position: 'fixed',
          left: '0px',
          width: '0px',
          height: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0px',
          // opacity: '0',
        }}
        
        */
