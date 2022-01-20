import { InMemoryCache, makeVar } from '@apollo/client';

export interface SchemaStatus {
  loading: boolean;
  error?: Error;
  data?: any;
}

export const schemaStatus = makeVar<SchemaStatus>({
  loading: true,
  error: undefined,
  data: null,
});

export const cache = new InMemoryCache({
  typePolicies: { // Type policy map
    Schema: {
      fields: {
        status: {
          read() {
            return schemaStatus();
          },
        },
      },
    },
  },
});
