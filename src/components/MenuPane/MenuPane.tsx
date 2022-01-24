import { InputHTMLAttributes, ReactElement } from 'react';
import { SxProp } from '@primer/react/lib-esm/sx';
import { Box, Header, Heading, SideNav, Text, useTheme } from '@primer/react';
// import styled from 'styled-components';
import { merge } from '@primer/react/lib/sx';
import { ThreeBarsIcon, XIcon } from '@primer/octicons-react';
import { getSidebarStyles, getSidebarHeaderStyles } from './styles';

export type SidebarProps = {
  children?: ReactElement | ReactElement[];
} & InputHTMLAttributes<HTMLInputElement> &
  SxProp;

/**
 * An accessible, menu pane component
 */
// eslint-disable-next-line no-empty-pattern
function Sidebar({ sx: sxProp = {} }: SidebarProps) {
  const { theme } = useTheme();
  const sxStyles = merge.all([getSidebarStyles(theme), sxProp as SxProp]);

  return (
    <Box sx={sxStyles}>
      <Header sx={getSidebarHeaderStyles(theme)}>
        <Header.Item
          full
          sx={{
            mr: 0,
          }}
        >
          <Heading
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: 'fg.default',
            }}
            as="h3"
          >
            <ThreeBarsIcon size={16} />
            {' Types'}
          </Heading>
        </Header.Item>
        <Header.Item
          sx={{
            mr: 0,
          }}
        >
          <XIcon size={16} />
        </Header.Item>
      </Header>
      <SideNav>
        <SideNav.Link href="#url">
          <Text>Toplevel ObjectType 1</Text>
        </SideNav.Link>
        <SideNav.Link href="#url" selected>
          <Text>Toplevel ObjectType 2</Text>
        </SideNav.Link>
        <SideNav.Link href="#url">
          <Text>Toplevel ObjectType 3</Text>
        </SideNav.Link>
        <SideNav.Link href="#url">
          <Text>Toplevel ObjectType 4</Text>
        </SideNav.Link>
      </SideNav>
    </Box>
  );
}

Sidebar.displayName = 'Sidebar';

export default Sidebar;
