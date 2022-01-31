import { useReactiveVar } from '@apollo/client';
import Sidebar, { SidebarItem } from './Sidebar';
import { selectedModelNameVar } from '../../hooks/selectedModelName';

export interface AppSidebarProps {
  entityNames: string[];
}

export function AppSidebar({
  entityNames,
}: AppSidebarProps): React.ReactElement {
  const selectedModelName = useReactiveVar(selectedModelNameVar);
  if (!selectedModelName) {
    selectedModelNameVar(entityNames[0]);
  }
  return (
    <Sidebar
      title="Queryable Types"
      sx={{
        float: 'right',
        width: '360px',
      }}
    >
      {entityNames.map((entityName: string) => (
        <SidebarItem
          key={entityName}
          title={entityName}
          selected={selectedModelName === entityName}
          onClick={() => {
            selectedModelNameVar(entityName);
          }}
        />
      ))}
    </Sidebar>
  );
}

AppSidebar.displayName = 'AppSidebar';
