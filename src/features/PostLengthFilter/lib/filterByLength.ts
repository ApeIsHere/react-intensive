import type { Post } from "../../../entities/post/model/types";

export function filterByLength(posts: Post[], maxTitleLength: number): Post[] {
  return posts.filter((post) => post.title.length <= maxTitleLength);
}
