import React, { useState } from "react";
import type { Comment } from "../../entities/comment/model/types";
import type { Post } from "../../entities/post/model/types";
import PostCard from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import CommentList from "../CommentList/ui/CommentList";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";

type PostListProps = {
  posts: Post[];
  comments: Comment[];
  title?: string;
};

function PostList({ posts, comments }: PostListProps) {
  const [maxTitleLength, setMaxTitleLength] = useState(30);
  const filtredPosts = filterByLength(posts, maxTitleLength);

  const handleLengthChange = (length: number) => {
    setMaxTitleLength(length);
  };

  return (
    <>
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>Posts</h1>
        <PostLengthFilter value={maxTitleLength} onLengthChange={handleLengthChange} />
      </div>
      <ul>
        {filtredPosts.map((post) => (
          <React.Fragment key={post.postId}>
            <PostCard post={post} />
            <CommentList comments={comments.filter((c) => c.postId === post.postId)} />
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

export default PostList;
