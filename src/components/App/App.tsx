import { gql, useQuery } from '@apollo/client';
import { BaseStyles, Box, Spinner, useTheme } from '@primer/react';
import { useState } from 'react';

import { HeaderNav } from '../HeaderNav/HeaderNav';
import { PageContent } from '../PageContent/PageContent';
import { PageNav } from '../PageNav/PageNav';
import { AppSidebar } from '../Sidebar/AppSidebar';
import TableHeader from '../TableHeader/TableHeader';

export function App() {
  const [entityNames, setEntityNames] = useState<string[]>([]);
  const [selectedEntityName, selectEntity] = useState<string | undefined>(
    undefined
  );
  const { theme } = useTheme();

  const { data, loading, error } = useQuery(
    gql`
      query GetMeta {
        schema: __type(name: "Query") {
          queries: fields {
            name
            description
            arguments: args {
              name
            }
            returnType: type {
              kind
              name
              ofType {
                __typename
                kind
                name
              }
            }
          }
        }
      }
    `
  );

  if (data && entityNames.length === 0) {
    const { schema } = data;
    const { queries } = schema;
    const namesToSet: string[] = [];
    queries.forEach((query: any) => {
      const { name, returnType } = query;
      if (returnType.kind === 'LIST') {
        namesToSet.push(name);
      }
    });
    setEntityNames(namesToSet);
  }
  console.log(entityNames);
  if (
    entityNames.length !== 0 &&
    selectedEntityName === undefined &&
    entityNames[0] !== selectedEntityName &&
    entityNames[0] !== undefined
  ) {
    console.log(selectedEntityName);
    console.log(entityNames[0]);
    selectEntity(entityNames[0]);
  }

  console.log(data, loading, error);

  return (
    <Box height="100% !important" backgroundColor="canvas.inset">
      <BaseStyles className="full-height">
        <HeaderNav />
        <TableHeader />
        {entityNames.length === 0 || selectedEntityName === undefined ? (
          <Spinner />
        ) : (
          <>
            <PageNav />
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                height: '100%',
              }}
            >
              <Box
                className="full-height"
                sx={{
                  backgroundColor: `${theme?.colors.canvas.default}`,
                  width: '100%',
                  height: '100%',
                }}
              >
                <PageContent selectedEntityName={selectedEntityName} />
              </Box>
              <AppSidebar
                selectedEntityName={selectedEntityName}
                selectEntity={selectEntity}
                entityNames={entityNames}
              />
            </Box>
          </>
        )}
      </BaseStyles>
    </Box>
  );
}

const x = {
  name: 'Prof. Samir Robel IV',
  address: '0741 Schroeder Fall Apt. 699\nDickensside, WI 75128',
  latitude: -80.55387,
  longitude: -61.637277999999995,
  maiden_name: 'Larson',
  birth_data: '2004-01-24',
  phone_h: '1-261-494-2716x784',
  phone_w: '(706)845-9407x170',
  email_u: 'alexandro.bayer',
  email_d: 'notvn.com',
  username: 'oharadejah',
  password: 'Qu7"Z5N1WIn)6X!r/!(',
  domain: 'langworth.com',
  useragent: 'Mozilla/5.0 (compatible; MSIE 11.0; Windows NT 5.1; Trident/4.0)',
  ipv4: '148.155.122.245',
  macaddress: '06:09:89:1C:A3:63',
  plasticcard: '4024007127356',
  cardexpir: '12/23',
  bonus: 5,
  company: 'Langosh and Sons',
  color: 'silver',
  uuid: '9cc3140e-191d-37fc-9849-aefbaf5b0cb9',
  height: 153,
  weight: 58.9,
  blood: 'O\u2212',
  eye: 'Amber',
  hair: 'Straight, Brown',
  pict: '5male',
  url: 'https://api.namefake.com/english-united-states/male/9597a9b2d675edc0a36c5a87b107872a',
  sport: 'Freestyle Skiing',
  ipv4_url: '//myip-address.com/ip-lookup/148.155.122.245',
  email_url: '//emailfake.com/notvn.com/alexandro.bayer',
  domain_url: '//myip-address.com/ip-lookup/langworth.com',
};
