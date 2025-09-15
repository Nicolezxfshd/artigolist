import Title from "@/app/components/Title";
import Link from 'next/link';
import Grid from '@/app/components/Grid';
import { artigos } from '@/lib/artigos';

export default function Home() {
  return (
    <main className="main">
      <Title title="Artigos que estão em alta" />
      <div className="artigos-container">
        <div className="page-header">
          <h1>Artigos Recentes</h1>
          <Link href="/artigos" className="view-all-link">
            Ver todos os artigos →
          </Link>
        </div>
        <Grid artigos={artigos.slice(0, 4)} />
      </div>
    </main>
  );
}
