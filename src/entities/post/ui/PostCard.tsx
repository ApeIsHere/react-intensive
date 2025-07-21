import React from "react";
import styles from "./PostCard.module.css";

type PostCardProps = {
  title: string;
  content: string;
};

function PostCard({ title, content }: PostCardProps) {
  return (
    <li className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </li>
  );
}

export default React.memo(PostCard);
