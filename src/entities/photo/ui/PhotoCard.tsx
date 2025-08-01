import type { Photo } from "../model/types";
import styles from "./PhotoCard.module.css";

type Props = {
  photo: Photo;
  onClick: () => void;
};

function PhotoCard({ photo, onClick }: Props) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src="https://placehold.co/320x240" alt={photo.title} />
      <p>{photo.title}</p>
    </div>
  );
}

export default PhotoCard;
