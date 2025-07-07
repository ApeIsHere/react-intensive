import type { Post } from "../../entities/post/model/types";
import PostCard from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";

type PostListProps = {
  posts: Post[];
};

function PostList({ posts }: PostListProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Posts</h1>
      <ul>
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} content={post.content} />
        ))}
      </ul>
    </div>
  );
}

export default PostList;
