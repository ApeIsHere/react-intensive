import React from "react";
import styles from "./PostListSkeleton.module.css";

function PostListSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.title_wrapper}>
        <div className={styles.title}></div>
        <div className={styles.slider}></div>
      </div>
      <ul className={styles.list}>
        {Array.from({ length: 3 }).map((_, i) => (
          <React.Fragment key={i}>
            <li className={styles.card}></li>
            <div className={styles.button}></div>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default PostListSkeleton;
