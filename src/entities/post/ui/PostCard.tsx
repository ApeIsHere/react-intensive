import React from "react";
import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import type { Post } from "../model/types";
import Tippy from "@tippyjs/react";

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  const { postId, title, content, userName, userId } = post;

  return (
    <li className={styles.card}>
      <h3 className={styles.title}>
        <Tippy
          content={`Open post: ${title}`}
          placement="top"
          arrow={true}
          theme="accented"
        >
          <Link to={`posts/${postId}`} className={`${styles.postLink} ${styles.title}`}>
            {title}
          </Link>
        </Tippy>
      </h3>
      <p className={styles.content}>{content}</p>
      <p>
        Author:{" "}
        <Tippy
          content={`Show posts by: ${userName}`}
          placement="bottom"
          arrow={true}
          theme="accented"
        >
          <Link to={`/users/${userId}/posts`} className={styles.author}>
            {userName}
          </Link>
        </Tippy>
      </p>
    </li>
  );
}

export default React.memo(PostCard);
