/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeVar, FieldFunctionOptions, gql } from '@apollo/client';
import { QKind, QMeta, __TypeKind, __Type, __EnumValue } from '../types/client';

const queryToMeta: Record<string, any> = {
  OBJECT: {
    kind: QKind.Entity,
    getReturnType: (query: any) => query.name,
  },
  LIST: {
    kind: QKind.EntityList,
    getReturnType: (query: any) => `[${query.type.ofType?.name}]`,
  },
};

type QueryToMetaResult = {
  kind: QKind;
  getReturnType: (query: any) => string;
};

const categorizeQuery = (query: any): any => {
  const { name } = query;
  const { kind } = query.type;
  const { kind: qKind, getReturnType } = queryToMeta[kind];
  const returnType = getReturnType(query);

  return { kind: qKind, name, returnType };
};

type QueryDescriptor = {
  name: String;
  kind: String;
  returnType: String;
};
export const queryDescriptionsVar = makeVar<QueryDescriptor[]>([]);
export const queryMetaPolicy = function merge(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  existing: any = [],
  incoming: any,
  options: FieldFunctionOptions
): any {
  if (Array.isArray(incoming)) {
    const QueryDescriptions = incoming.map((query) => {
      return categorizeQuery(query);
    });
    queryDescriptionsVar(QueryDescriptions);
    options.cache.writeQuery({
      query: gql`
        query QueryDescriptions {
          QueryDescriptions
        }
      `,
      data: {
        QueryDescriptions,
      },
    });
  }
};
