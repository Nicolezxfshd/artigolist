// src/components/Lista.tsx
'use client';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import { FiHeart, FiArrowRight, FiUser, FiEye } from 'react-icons/fi'; // Removi o FiMessageSquare que não era usado
import Link from 'next/link';
import { Artigo } from '@/lib/artigos';

type Props = {
  artigos: Artigo[];
};

// Função para gerar uma categoria aleatória
const getRandomCategory = () => {
  const categories = ['Tecnologia', 'Programação', 'Design', 'Negócios', 'Produtividade'];
  return categories[Math.floor(Math.random() * categories.length)];
};

const Lista = ({ artigos }: Props) => {
  const [likes, setLikes] = useState<{ [key: number]: number }>({});
  const [liked, setLiked] = useState<{ [key: number]: boolean }>({});

  const handleLike = (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + (liked[id] ? -1 : 1),
    }));

    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {artigos.map((artigo) => {
        const category = artigo.category || getRandomCategory();
        const articleDate = artigo.date ? new Date(artigo.date) : new Date();
        const formattedDate = format(articleDate, "d 'de' MMMM 'de' yyyy", { locale: ptBR });
        const likeCount = (artigo.likes || 0) + (likes[artigo.id] || 0);
        const isLiked = liked[artigo.id] || false;

        return (
          <div key={artigo.id} className="article-card">
            <article className="artigo">
              <div className="artigo-header">
                <span className="artigo-category">{category}</span>
                <span className="artigo-date">{formattedDate}</span>
              </div>

              <h2 className="artigo-titulo">{artigo.title}</h2>

              <div className="artigo-meta">
                <span className="artigo-autor">
                  <FiUser className="meta-icon" /> {artigo.author}
                </span>
                <span className="artigo-visualizacoes">
                  <FiEye className="meta-icon" /> {artigo.views?.toLocaleString() || '0'} visualizações
                </span>
              </div>

              <p className="artigo-descricao">{artigo.description}</p>

              <div className="artigo-footer">
                <div className="artigo-actions">
                  <button
                    className={`like-button ${isLiked ? 'liked' : ''}`}
                    onClick={(e) => handleLike(artigo.id, e)}
                    aria-label={isLiked ? 'Remover curtida' : 'Curtir'}
                  >
                    <FiHeart className={isLiked ? 'filled' : ''} />
                    <span>{likeCount}</span>
                  </button>
                </div>

                <Link href={`/artigo/${artigo.id}`} className="btn-ler-artigo">
                  Acessar <FiArrowRight className="arrow-icon" />
                </Link>
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default Lista;

