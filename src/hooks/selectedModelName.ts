import { makeVar } from '@apollo/client';

export const selectedModelNameVar = makeVar<string | undefined>(undefined);

/*
export function useSelectedModelName(
  this: Function & { initialState: string | undefined },
  initialModelName: string | undefined
) {
  if (initialModelName) {
    if (this.initialState === undefined) {
      this.initialState = initialModelName;
    }
  }
  const [selectedModelName, selectModelName] = useState(initialModelName);
  return [selectedModelName, selectModelName] as const;
}
*/
