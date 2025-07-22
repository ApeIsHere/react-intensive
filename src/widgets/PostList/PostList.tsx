import React, { useState } from "react";
import type { Comment } from "../../entities/comment/model/types";
import type { Post } from "../../entities/post/model/types";
import PostCard from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import CommentList from "../CommentList/ui/CommentList";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { MAX_TITLE_LENGTH } from "../../shared/constants/constants";
import ItemList from "../../shared/ui/ItemList/ItemList";

type PostListProps = {
  posts: Post[];
  comments: Comment[];
  title?: string;
};

function PostList({ posts, comments, title = "Posts" }: PostListProps) {
  const [maxTitleLength, setMaxTitleLength] = useState(MAX_TITLE_LENGTH);
  const filtredPosts = filterByLength(posts, maxTitleLength);

  const handleLengthChange = (length: number) => {
    setMaxTitleLength(length);
  };

  return (
    <>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <PostLengthFilter value={maxTitleLength} onLengthChange={handleLengthChange} />
      </div>
      <ItemList
        items={filtredPosts}
        renderItem={(post) => (
          <>
            <PostCard post={post} />
            <CommentList
              comments={comments.filter((comment) => comment.postId === post.id)}
            />
          </>
        )}
      />
    </>
  );
}

export default PostList;
