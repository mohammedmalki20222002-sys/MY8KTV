import { BLOG_POSTS, BlogPost } from "./blogPosts";
import { SEO_BLOG_POSTS } from "./seoBlogPosts";

export const ALL_POSTS: BlogPost[] = [...SEO_BLOG_POSTS, ...BLOG_POSTS].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO)
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find(p => p.slug === slug);
}
