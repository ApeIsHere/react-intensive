import { useCallback, useState } from "react";
import type { Comment } from "../../../entities/comment/model/types";
import styles from "./CommentList.module.css";
import Button from "../../../shared/ui/Button";
import CommentCard from "../../../entities/comment/ui/CommentCard";
import ItemList from "../../../shared/ui/ItemList/ItemList";

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
        <ItemList
          items={comments}
          renderItem={(comment) => <CommentCard comment={comment} />}
        />
      )}
    </div>
  );
}

export default CommentList;
