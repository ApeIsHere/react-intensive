import styles from "./PostCard.module.css";

type PostCardProps = {
  title: string;
  content: string;
};

function PostCard({ title, content }: PostCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  );
}

export default PostCard;
