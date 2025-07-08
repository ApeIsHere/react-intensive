import { useCallback, useState } from "react";
import type { Comment } from "../../../entities/comment/model/types";
import styles from "./CommentList.module.css";
import Button from "../../../shared/ui/Button";
import CommentCard from "../../../entities/comment/ui/CommentCard";

type CommentListProps = {
  comments: Comment[];
};

function CommentList({ comments }: CommentListProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className={styles.container}>
      <Button onClick={toggle}>{isOpen ? "Hide Comments" : "Show Comments"}</Button>

      {isOpen && (
        <ul>
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default CommentList;
