import { Context, createContext, useContext } from 'react';

export interface SchemaContextValue {
  schema?: any;
}

export const SchemaContext: Context<SchemaContextValue> = createContext<SchemaContextValue>({});

export const SchemaProvider = SchemaContext.Provider;

export const SchemaConsumer = SchemaContext.Consumer;

export const useSchema = useContext.bind(SchemaContext);
