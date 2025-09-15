import Grid from '../components/Grid';
import { artigos } from '../../lib/artigos';

export default function ArtigosPage() {
  return (
    <main className="artigos-container">
      <h1>Artigos Recentes</h1>
      <Grid artigos={artigos} />
    </main>
  );
}
