export interface Artigo {
  id: number;
  title: string;
  description: string;
  author: string;
  views: number;
  category?: string;
  date?: Date;
  likes?: number;
}

export const artigos: Artigo[] = [
  {
    id: 1,
    title: 'Aprendendo JavaScript',
    description: 'JavaScript é uma linguagem de programação versátil usada para desenvolvimento web. Ele permite criar desde interações simples em páginas até aplicações completas, sendo essencial para front-end e também muito utilizado no back-end com Node.js. Além disso, é constantemente atualizado, o que garante sua relevância no mercado de tecnologia.',
    author: 'João Silva',
    views: 1245,
    category: 'Programação',
    date: new Date('2025-09-01'),
    likes: 42
  },
  {
    id: 2,
    title: 'Dominando React',
    description: 'React é uma biblioteca JavaScript para construção de interfaces de usuário. Criada pelo Facebook, ela utiliza o conceito de componentes reutilizáveis, o que facilita a manutenção e a escalabilidade de projetos. Sua popularidade cresceu devido ao excelente desempenho com a manipulação eficiente do DOM e à vasta comunidade que mantém inúmeros recursos, ferramentas e boas práticas.',
    author: 'Maria Oliveira',
    views: 987,
    category: 'Front-end',
    date: new Date('2025-08-15'),
    likes: 35
  },
  {
    id: 3,
    title: 'Introdução ao Next.js',
    description: 'Next.js é um framework React para construção de aplicações web modernas. Ele traz recursos prontos como renderização do lado do servidor (SSR), geração de sites estáticos (SSG) e suporte a rotas dinâmicas, o que simplifica muito o desenvolvimento. Além disso, oferece otimização automática de performance, integração com APIs e uma experiência de desenvolvimento fluida, tornando-se uma escolha ideal para projetos profissionais.',
    author: 'Carlos Santos',
    views: 1567,
    category: 'Front-end',
    date: new Date('2025-09-10'),
    likes: 28
  },
  {
    id: 4,
    title: 'Explorando TypeScript',
    description: 'TypeScript é um superset do JavaScript que adiciona tipagem estática e recursos avançados para desenvolvimento. Ele ajuda a reduzir erros comuns, melhora a legibilidade do código e facilita a manutenção em projetos grandes. Amplamente adotado em empresas e frameworks modernos, o TypeScript torna o processo de desenvolvimento mais seguro, previsível e profissional, além de oferecer compatibilidade total com JavaScript.',
    author: 'Ana Souza',
    views: 2034,
    category: 'Programação',
    date: new Date('2025-08-20'),
    likes: 31
  }
];
