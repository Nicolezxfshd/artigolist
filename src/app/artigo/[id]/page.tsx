// src/app/artigo/[id]/page.tsx
import { FiMessageSquare } from "react-icons/fi"; // <- se não for usar, pode remover essa linha
import { Artigo } from "@/types/types";

// Defina corretamente o tipo de props
interface PageProps {
  params: {
    id: string;
  };
}

// Simulando dados de artigos (mock)
const artigos: Artigo[] = [
  {
    id: 1,
    title: "Aprendendo JavaScript",
    description: "JavaScript é uma linguagem de programação versátil usada para desenvolvimento web.",
    author: "Nicole Zimmer",
    date: "2025-09-14",
  },
  {
    id: 2,
    title: "Dominando React",
    description: "React é uma biblioteca JavaScript para construir interfaces de usuário de forma declarativa.",
    author: "OpenAI Dev",
    date: "2025-09-13",
  },
];

// Página dinâmica do artigo
export default function ArtigoPage({ params }: PageProps) {
  const { id } = params;
  const artigo = artigos.find((a) => a.id === Number(id));

  if (!artigo) {
    return <p>Artigo não encontrado.</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{artigo.title}</h1>
      <p className="text-gray-700 mb-2">{artigo.description}</p>
      <p className="text-sm text-gray-500">
        Autor: {artigo.author} | Publicado em: {artigo.date}
      </p>
    </main>
  );
}
