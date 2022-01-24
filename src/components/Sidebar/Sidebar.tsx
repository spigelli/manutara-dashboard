import { InputHTMLAttributes, ReactElement } from 'react';
import { SxProp } from '@primer/react/lib-esm/sx';
import { Box, Header, Heading, SideNav, Text, useTheme } from '@primer/react';
// import styled from 'styled-components';
import { merge } from '@primer/react/lib/sx';
import { ThreeBarsIcon, XIcon } from '@primer/octicons-react';
import { getSidebarStyles, getSidebarHeaderStyles } from './styles';

export type SidebarProps = {
  title: string;
  // Children are SidebarItem
  children?: ReactElement<SidebarItemProps>[];
} & InputHTMLAttributes<HTMLInputElement> &
  SxProp;

export type SidebarItemProps = {
  title: string;
  href: string;
  selected?: boolean;
};

export function SidebarItem({ title, href, selected }: SidebarItemProps) {
  return (
    <SideNav.Link href={href} selected={selected}>
      <Text>{title}</Text>
    </SideNav.Link>
  );
}

SidebarItem.displayName = 'SidebarItem';

/**
 * An accessible, menu pane component
 */
// eslint-disable-next-line no-empty-pattern
function Sidebar({ title, children, sx: sxProp = {} }: SidebarProps) {
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
            {` ${title}`}
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
        {children &&
          Array.isArray(children) && // Redundant check, but good to have
          children}
      </SideNav>
    </Box>
  );
}

Sidebar.displayName = 'Sidebar';

export default Sidebar;