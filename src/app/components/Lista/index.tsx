// src/app/artigo/[id]/page.tsx
import { notFound } from 'next/navigation';
import { artigos } from '@/lib/artigos';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FiUser, FiEye, FiHeart } from 'react-icons/fi';
import './styles.css';

interface PageProps {
  params: {
    id: string;
  };
}

export default function ArtigoPage({ params }: PageProps) {
  const artigo = artigos.find((a) => a.id.toString() === params.id);

  if (!artigo) {
    notFound(); // ou return <div>Artigo não encontrado</div>;
  }

  const formattedDate = artigo.date
    ? format(new Date(artigo.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })
    : '';

  return (
    <main className="artigo-detalhe">
      <div className="artigo-container">
        <div className="artigo-header">
          <span className="artigo-categoria">{artigo.category}</span>
          <span className="artigo-data">{formattedDate}</span>
        </div>

        <h1 className="artigo-titulo">{artigo.title}</h1>

        <div className="artigo-meta">
          <div className="artigo-autor">
            <FiUser className="meta-icon" />
            <span>{artigo.author}</span>
          </div>
          <div className="artigo-visualizacoes">
            <FiEye className="meta-icon" />
            <span>{artigo.views?.toLocaleString() || '0'} visualizações</span>
          </div>
          <div className="artigo-curtidas">
            <FiHeart className="meta-icon" />
            <span>{artigo.likes?.toLocaleString() || '0'} curtidas</span>
          </div>
        </div>

        <div className="artigo-conteudo">
          <p className="artigo-descricao">{artigo.description}</p>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return artigos.map((artigo) => ({
    id: artigo.id.toString(),
  }));
}
