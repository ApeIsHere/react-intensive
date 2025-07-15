import React, { useMemo, useState } from "react";
import type { Comment } from "../../entities/comment/model/types";
import type { Post } from "../../entities/post/model/types";
import PostCard from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import CommentList from "../CommentList/ui/CommentList";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { MAX_TITLE_LENGTH } from "../../shared/constants/constants";

type PostListProps = {
  posts: Post[];
  comments: Comment[];
  title?: string;
};

function PostList({ posts, comments, title = "Posts" }: PostListProps) {
  const [maxTitleLength, setMaxTitleLength] = useState(MAX_TITLE_LENGTH);
  const filtredPosts = useMemo(
    () => filterByLength(posts, maxTitleLength),
    [posts, maxTitleLength]
  );

  return (
    <div className={styles.container}>
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <PostLengthFilter value={maxTitleLength} onLengthChange={setMaxTitleLength} />
      </div>
      <ul>
        {filtredPosts.map((post) => (
          <React.Fragment key={post.postId}>
            <PostCard post={post} />
            <CommentList comments={comments.filter((c) => c.postId === post.postId)} />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
