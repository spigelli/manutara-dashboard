export const displayTypeToQueryKind: Record<string, string> = {
  table: 'LIST_ALL',
  search: 'SEARCH',
};

/**
 * Types of wrapper components that convey all instances of a model
 */
export type DisplayType = keyof typeof displayTypeToQueryKind;
