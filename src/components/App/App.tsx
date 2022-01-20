import { useQuery } from '@apollo/client';
import './App.css';
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
      app
    </div>
  );
}
