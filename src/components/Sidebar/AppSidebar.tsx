import Sidebar, { SidebarItem } from './Sidebar';

export interface AppSidebarProps {
  selectedEntityName: string;
  selectEntity: (name: string) => void;
  entityNames: string[];
}

export function AppSidebar({
  selectedEntityName,
  selectEntity,
  entityNames,
}: AppSidebarProps): React.ReactElement {
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
          selected={selectedEntityName === entityName}
          onClick={() => {
            selectEntity(entityName);
          }}
        />
      ))}
    </Sidebar>
  );
}

AppSidebar.displayName = 'AppSidebar';
