/**
 * Barrel re-export — all blog data now lives in lib/blog/*.
 * This file exists only for backward compatibility with existing imports.
 */
export type { BlogPost } from "./blog/types";
export { BLOG_POSTS } from "./blog/index";
export { getPostBySlug, getRelatedPosts } from "./blog/utils";
