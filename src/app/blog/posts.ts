export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  coverImage: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "introducao-ao-nextjs-15",
    title: "Introdução ao Next.js 15",
    excerpt: "Veja o que mudou na nova versão do Next.js.",
    content:
      "Aqui você coloca o conteúdo completo da matéria. Pode ser um markdown renderizado, texto rico, etc.",
    date: "2025-02-10",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "melhores-praticas-typescript-frontend",
    title: "Melhores práticas com TypeScript no Front-end",
    excerpt: "Dicas para tipar melhor seu código e evitar bugs comuns.",
    content:
      "Conteúdo detalhado sobre boas práticas com TypeScript no front-end...",
    date: "2025-03-05",
    coverImage:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "otimizando-imagens-nextjs",
    title: "Otimizando imagens no Next.js",
    excerpt: "Como usar o componente Image de forma eficiente.",
    content:
      "Explicação longa sobre otimização de imagens, layouts responsivos, formatos modernos, etc...",
    date: "2025-03-20",
    coverImage:
      "https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "hooks-avancados-react",
    title: "Hooks avançados em React",
    excerpt: "Custom hooks para casos reais do dia a dia.",
    content:
      "Aqui você detalha vários padrões com hooks customizados, composição de lógica, etc...",
    date: "2024-12-15",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
