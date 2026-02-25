// Auto-import all .mdx files from the posts directory using Vite's glob import
const modules = import.meta.glob<{
  frontmatter: {
    title: string;
    description: string;
    image: string;
    date: string;
    slug: string;
    draft?: boolean;
  };
  default: React.ComponentType;
}>("../posts/*.mdx", { eager: true });

export interface PostMeta {
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
}

export interface Post extends PostMeta {
  Component: React.ComponentType<{
    components?: Record<string, React.ComponentType<any>>;
  }>;
}

export function getAllPosts(): Post[] {
  return Object.values(modules)
    .filter((mod) => !mod.frontmatter.draft)
    .map((mod) => ({
      ...mod.frontmatter,
      Component: mod.default,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
