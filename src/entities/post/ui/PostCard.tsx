import React from "react";
import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import type { Post } from "../model/types";

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  const { postId, title, content, userName, userId } = post;

  return (
    <li className={styles.card}>
      <h3 className={styles.title}>
        <Link to={`posts/${postId}`} className={styles.postLink}>
          {title}
        </Link>
      </h3>
      <p className={styles.content}>{content}</p>
      <p>
        Author:{" "}
        <Link to={`/users/${userId}/posts`} className={styles.author}>
          {userName}
        </Link>
      </p>
    </li>
  );
}

export default React.memo(PostCard);
