import { Theme } from '@primer/react/lib/ThemeProvider';

export const getSidebarHeaderStyles = (theme?: Theme) => {
  const styles = {
    borderStyle: 'solid',
    borderColor: `${theme?.colors.border.default}`,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
    px: 3,
    py: 2,
  };
  return styles;
};

export const getSidebarStyles = (theme?: Theme) => {
  const styles = {
    backgroundColor: `${theme?.colors.project.sidebarBg}`,
    borderWidth: '1px',
    borderStyle: ' solid',
    borderColor: `${theme?.colors.border.default}`,
    borderRadius: 0,
    padding: 0,
    maxWidth: 360,
  };
  return styles;
};
