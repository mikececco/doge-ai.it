export type { BlogPost } from "./types";
export { SETTORI_POSTS } from "./posts-settori";
export { SETTORI_NICHE_POSTS } from "./posts-settori-niche";
export { CORE_POSTS } from "./posts-core";

import { SETTORI_POSTS } from "./posts-settori";
import { SETTORI_NICHE_POSTS } from "./posts-settori-niche";
import { CORE_POSTS } from "./posts-core";

export const BLOG_POSTS = [
  ...SETTORI_POSTS,
  ...SETTORI_NICHE_POSTS,
  ...CORE_POSTS,
];

export { getPostBySlug, getRelatedPosts } from "./utils";
