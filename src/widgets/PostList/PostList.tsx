import React, { useMemo, useState } from "react";
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
};

function PostList({ posts, comments }: PostListProps) {
  const [maxTitleLength, setMaxTitleLength] = useState(30);
  const filtredPosts = useMemo(
    () => filterByLength(posts, maxTitleLength),
    [posts, maxTitleLength]
  );

  const handleLengthChange = (length: number) => {
    setMaxTitleLength(length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>Posts</h1>
        <PostLengthFilter value={maxTitleLength} onLengthChange={handleLengthChange} />
      </div>
      <ul>
        {filtredPosts.map((post) => (
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
