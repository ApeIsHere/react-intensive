import React from "react";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import type { Post } from "../model/types";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/providers/store/store";
import { selectUserById } from "../../user/model/slice/userSlice";
import { capitalize } from "../../../shared/lib/string/capitalize";
import styles from "./PostCard.module.css";

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  const { id, title, body, userId } = post;
  const user = useSelector((state: RootState) => selectUserById(state, userId));
  const username = user?.username || "unknown user";

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
            {capitalize(title)}
          </Link>
        </Tippy>
      </h3>
      <p className={styles.content}>{capitalize(body)}</p>
      <div className={styles.author}>
        <p>
          <span className={styles.authorTitle}>Author: </span>
          <Tippy
            content={`Show posts by: ${username}`}
            placement="bottom"
            arrow={true}
            theme="accented"
          >
            <Link to={`/users/${userId}/posts`} className={styles.authorLabel}>
              {username}
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
