import React from "react";
import { Link } from "react-router-dom";
import type { Post } from "../model/types";
import Tippy from "@tippyjs/react";
import styles from "./PostCard.module.css";

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  const { id, title, body, userId } = post;
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  const capitalizedText = body.charAt(0).toUpperCase() + body.slice(1);
  const userName = "TEMP";

  return (
    <li className={styles.card}>
      <h3 className={styles.title}>
        <Tippy
          content={`Open post: ${title}`}
          placement="top"
          arrow={true}
          theme="accented"
        >
          <Link to={`/posts/${id}`} className={`${styles.postLink} ${styles.title}`}>
            {capitalizedTitle}
          </Link>
        </Tippy>
      </h3>
      <p className={styles.content}>{capitalizedText}</p>
      <div className={styles.author}>
        <p>
          <span className={styles.authorTitle}>Author: </span>
          <Tippy
            content={`Show posts by: ${userName}`}
            placement="bottom"
            arrow={true}
            theme="accented"
          >
            <Link to={`/users/${userId}/posts`} className={styles.authorLabel}>
              {userName}
            </Link>
          </Tippy>
        </p>
        <p>
          <span className={styles.userIdLabel}>User id: </span>
          <span>{userId}</span>
        </p>
      </div>
    </li>
  );
}

export default React.memo(PostCard);
