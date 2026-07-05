import { BLOG_POSTS, BlogPost } from "./blogPosts";
import { SEO_BLOG_POSTS } from "./seoBlogPosts";
import { FR_BLOG_POSTS_01 } from "./frBlogPosts01";
import { FR_BLOG_POSTS_02 } from "./frBlogPosts02";
import { FR_BLOG_POSTS_03 } from "./frBlogPosts03";
import { FR_BLOG_POSTS_04 } from "./frBlogPosts04";
import { FR_BLOG_POSTS_05 } from "./frBlogPosts05";
import { FR_BLOG_POSTS_06 } from "./frBlogPosts06";
import { FR_BLOG_POSTS_07 } from "./frBlogPosts07";
import { FR_BLOG_POSTS_08 } from "./frBlogPosts08";
import { FR_BLOG_POSTS_09 } from "./frBlogPosts09";
import { FR_BLOG_POSTS_10 } from "./frBlogPosts10";
import { FR_BLOG_POSTS_11 } from "./frBlogPosts11";
import { FR_BLOG_POSTS_12 } from "./frBlogPosts12";
import { FR_BLOG_POSTS_13 } from "./frBlogPosts13";
import { FR_BLOG_POSTS_14 } from "./frBlogPosts14";
import { FR_BLOG_POSTS_15 } from "./frBlogPosts15";
import { FR_BLOG_POSTS_16 } from "./frBlogPosts16";
import { FR_BLOG_POSTS_17 } from "./frBlogPosts17";
import { FR_BLOG_POSTS_18 } from "./frBlogPosts18";
import { FR_BLOG_POSTS_19 } from "./frBlogPosts19";
import { FR_BLOG_POSTS_20 } from "./frBlogPosts20";
import { FR_BLOG_POSTS_21 } from "./frBlogPosts21";
import { FR_BLOG_POSTS_22 } from "./frBlogPosts22";
import { NL_BLOG_POSTS_01 } from "./nlBlogPosts01";
import { NL_BLOG_POSTS_02 } from "./nlBlogPosts02";
import { NL_BLOG_POSTS_03 } from "./nlBlogPosts03";
import { NL_BLOG_POSTS_04 } from "./nlBlogPosts04";
import { NL_BLOG_POSTS_05 } from "./nlBlogPosts05";
import { NL_BLOG_POSTS_06 } from "./nlBlogPosts06";
import { NL_BLOG_POSTS_07 } from "./nlBlogPosts07";
import { NL_BLOG_POSTS_08 } from "./nlBlogPosts08";
import { NL_BLOG_POSTS_09 } from "./nlBlogPosts09";
import { NL_BLOG_POSTS_10 } from "./nlBlogPosts10";

const FR_BLOG_POSTS: BlogPost[] = [
  ...FR_BLOG_POSTS_01,
  ...FR_BLOG_POSTS_02,
  ...FR_BLOG_POSTS_03,
  ...FR_BLOG_POSTS_04,
  ...FR_BLOG_POSTS_05,
  ...FR_BLOG_POSTS_06,
  ...FR_BLOG_POSTS_07,
  ...FR_BLOG_POSTS_08,
  ...FR_BLOG_POSTS_09,
  ...FR_BLOG_POSTS_10,
  ...FR_BLOG_POSTS_11,
  ...FR_BLOG_POSTS_12,
  ...FR_BLOG_POSTS_13,
  ...FR_BLOG_POSTS_14,
  ...FR_BLOG_POSTS_15,
  ...FR_BLOG_POSTS_16,
  ...FR_BLOG_POSTS_17,
  ...FR_BLOG_POSTS_18,
  ...FR_BLOG_POSTS_19,
  ...FR_BLOG_POSTS_20,
  ...FR_BLOG_POSTS_21,
  ...FR_BLOG_POSTS_22,
];

const NL_BLOG_POSTS: BlogPost[] = [
  ...NL_BLOG_POSTS_01,
  ...NL_BLOG_POSTS_02,
  ...NL_BLOG_POSTS_03,
  ...NL_BLOG_POSTS_04,
  ...NL_BLOG_POSTS_05,
  ...NL_BLOG_POSTS_06,
  ...NL_BLOG_POSTS_07,
  ...NL_BLOG_POSTS_08,
  ...NL_BLOG_POSTS_09,
  ...NL_BLOG_POSTS_10,
];

export const ALL_POSTS: BlogPost[] = [...SEO_BLOG_POSTS, ...FR_BLOG_POSTS, ...NL_BLOG_POSTS, ...BLOG_POSTS].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO)
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find(p => p.slug === slug);
}
