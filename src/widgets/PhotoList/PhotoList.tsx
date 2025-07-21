import styles from "./PhotoList.module.css";
import PhotoCard from "../../entities/photo/ui/PhotoCard";
import type { Photo } from "../../entities/photo/model/types";

type PhotoListProps = {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
};

function PhotoList({ photos, onPhotoClick }: PhotoListProps) {
  return (
    <div className={styles.grid}>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} onClick={() => onPhotoClick(photo)} />
      ))}
    </div>
  );
}

export default PhotoList;
