import { useQuery } from '@apollo/client';
import { schemaStatus } from '../../cache/cache';
import { schemaQuery } from '../../schema/schema';

export function App() {
  const { loading, error, data } = useQuery(schemaQuery);
  schemaStatus({ loading, error, data });
  console.log('loading', loading);
  console.log('error', error);
  console.log('data', data);
  return (
    <div className="App">
      {loading ? 'loading' : 'loaded'}
      {error ? 'error' : 'no error'}
      {JSON.stringify(data) || 'no data'}
    </div>
  );
}
