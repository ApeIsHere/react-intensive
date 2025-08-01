import styles from "./PhotoList.module.css";
import PhotoCard from "../../entities/photo/ui/PhotoCard";
import type { Photo } from "../../entities/photo/model/types";
import ItemList from "../../shared/ui/ItemList/ItemList";

type PhotoListProps = {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
};

function PhotoList({ photos, onPhotoClick }: PhotoListProps) {
  const handlePhotoClick = (photo: Photo) => onPhotoClick(photo);

  return (
    <ItemList
      items={photos}
      ulClassName={styles.grid}
      renderItem={(photo) => (
        <PhotoCard photo={photo} onClick={() => handlePhotoClick(photo)} />
      )}
    />
  );
}

export default PhotoList;
