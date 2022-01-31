import { HeaderRow } from './HeaderRow';
import { testData } from './testData';
import { HeaderCell } from './HeaderCell';
import { TBody } from './TBody';
import { Row } from './Row';
import { Cell } from './Cell';

/**
 * Table component displays a table of data from testData which is a list of the form:
 * {
    id: 1,
    name: 'test',
    url: 'http://test.com',
    description: 'test',
    language: 'typescript',
    stars: 1,
    forks: 1,
    created_at: '2020-01-01',
  }
 */
export function GithubTable() {
  const headers = Object.keys(testData[0]);
  const data: Record<string, number | string>[] = testData;

  return (
    <table style={{ width: '1740px' }}>
      <thead>
        <HeaderRow>
          {headers.map((header) => (
            <HeaderCell key={header}>{header}</HeaderCell>
          ))}
        </HeaderRow>
      </thead>
      <TBody>
        {data.map((row) => (
          <Row key={row.id}>
            {headers.map((header) => (
              <Cell key={`${row.id}-${header}`}>{row[header]}</Cell>
            ))}
          </Row>
        ))}
      </TBody>
    </table>
  );
}
