declare module '@/lib/artigos' {
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

  export const artigos: Artigo[];
}
