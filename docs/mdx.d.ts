declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const frontmatter: {
    title: string;
    description: string;
    image: string;
    date: string;
    slug: string;
    draft?: boolean;
  };

  const MDXComponent: ComponentType<{
    components?: Record<string, ComponentType<any>>;
  }>;
  export default MDXComponent;
}
