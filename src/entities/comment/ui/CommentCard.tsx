import type { Comment } from "../model/types";
import styles from "./CommentCard.module.css";

type CommentCardProps = {
  comment: Comment;
};

function CommentCard({ comment }: CommentCardProps) {
  const { email, body } = comment;
  return (
    <li className={styles.comment}>
      <p className={styles.text}>
        <span className={styles.user}>{email}:</span> {body}
      </p>
    </li>
  );
}

export default CommentCard;
