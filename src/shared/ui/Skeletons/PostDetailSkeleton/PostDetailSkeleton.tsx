import styles from "./PostDetailSkeleton.module.css";

function PostDetailSkeleton() {
  return (
    <>
      <div className={styles.postCard} />
      <div className={styles.container}></div>
    </>
  );
}

export default PostDetailSkeleton;
