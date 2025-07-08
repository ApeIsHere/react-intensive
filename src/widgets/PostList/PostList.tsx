import React from "react";
import type { Comment } from "../../entities/comment/model/types";
import type { Post } from "../../entities/post/model/types";
import PostCard from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import CommentList from "../CommentList/ui/CommentList";

type PostListProps = {
  posts: Post[];
  comments: Comment[];
};

function PostList({ posts, comments }: PostListProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Posts</h1>
      <ul>
        {posts.map((post) => (
          <React.Fragment key={post.id}>
            <PostCard title={post.title} content={post.content} />
            <CommentList comments={comments.filter((c) => c.postId === post.id)} />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
