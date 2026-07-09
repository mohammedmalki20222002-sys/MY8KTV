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
import { DE_BLOG_POSTS_01 } from "./deBlogPosts01";
import { DE_BLOG_POSTS_02 } from "./deBlogPosts02";
import { DE_BLOG_POSTS_03 } from "./deBlogPosts03";
import { DE_BLOG_POSTS_04 } from "./deBlogPosts04";
import { DE_BLOG_POSTS_05 } from "./deBlogPosts05";
import { DE_BLOG_POSTS_06 } from "./deBlogPosts06";
import { DE_BLOG_POSTS_07 } from "./deBlogPosts07";
import { DE_BLOG_POSTS_08 } from "./deBlogPosts08";
import { DE_BLOG_POSTS_09 } from "./deBlogPosts09";
import { DE_BLOG_POSTS_10 } from "./deBlogPosts10";
import { ES_BLOG_POSTS_01 } from "./esBlogPosts01";
import { ES_BLOG_POSTS_02 } from "./esBlogPosts02";
import { ES_BLOG_POSTS_03 } from "./esBlogPosts03";
import { NO_BLOG_POSTS_01 } from "./noBlogPosts01";
import { NO_BLOG_POSTS_02 } from "./noBlogPosts02";
import { NO_BLOG_POSTS_03 } from "./noBlogPosts03";
import { SV_BLOG_POSTS_01 } from "./svBlogPosts01";
import { SV_BLOG_POSTS_02 } from "./svBlogPosts02";
import { SV_BLOG_POSTS_03 } from "./svBlogPosts03";

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

const DE_BLOG_POSTS: BlogPost[] = [
  ...DE_BLOG_POSTS_01,
  ...DE_BLOG_POSTS_02,
  ...DE_BLOG_POSTS_03,
  ...DE_BLOG_POSTS_04,
  ...DE_BLOG_POSTS_05,
  ...DE_BLOG_POSTS_06,
  ...DE_BLOG_POSTS_07,
  ...DE_BLOG_POSTS_08,
  ...DE_BLOG_POSTS_09,
  ...DE_BLOG_POSTS_10,
];

const ES_BLOG_POSTS: BlogPost[] = [
  ...ES_BLOG_POSTS_01,
  ...ES_BLOG_POSTS_02,
  ...ES_BLOG_POSTS_03,
];

const NO_BLOG_POSTS: BlogPost[] = [
  ...NO_BLOG_POSTS_01,
  ...NO_BLOG_POSTS_02,
  ...NO_BLOG_POSTS_03,
];

const SV_BLOG_POSTS: BlogPost[] = [
  ...SV_BLOG_POSTS_01,
  ...SV_BLOG_POSTS_02,
  ...SV_BLOG_POSTS_03,
];

export const ALL_POSTS: BlogPost[] = [...SEO_BLOG_POSTS, ...FR_BLOG_POSTS, ...NL_BLOG_POSTS, ...DE_BLOG_POSTS, ...ES_BLOG_POSTS, ...NO_BLOG_POSTS, ...SV_BLOG_POSTS, ...BLOG_POSTS].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO)
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find(p => p.slug === slug);
}
