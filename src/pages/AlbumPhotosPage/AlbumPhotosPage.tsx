import { useLocation, useParams } from "react-router-dom";
import styles from "./AlbumPhotosPage.module.css";
import { mockPhotos } from "../../shared/constants/constants";
import { useState } from "react";
import Modal from "../../shared/ui/Modal";
import type { Photo } from "../../entities/photo/model/types";
import PhotoList from "../../widgets/PhotoList/PhotoList";

function AlbumPhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const { id } = useParams(); // albumId
  const albumId = Number(id);
  const albumPhotos = mockPhotos.filter((photo) => photo.albumId === albumId);
  const { state: albumTitle } = useLocation();

  const handleClick = (photo: Photo) => setSelectedPhoto(photo);
  const closeModal = () => setSelectedPhoto(null);

  // guard-clause
  if (!albumPhotos.length) {
    return <div className={styles.empty}>No photos found for this album</div>;
  }

  return (
    <>
      <h2 className={styles.title}>
        {albumTitle ? `${albumTitle} Photos` : "Album Photos"}
      </h2>
      <PhotoList photos={albumPhotos} onPhotoClick={handleClick} />

      {/* Пока что просто открываем картинки в модалке*/}
      {selectedPhoto && (
        <Modal isOpen={true} onClose={closeModal}>
          <Modal.Header>{selectedPhoto.title}</Modal.Header>
          <Modal.Body>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className={styles.modalImg}
              loading="lazy"
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default AlbumPhotosPage;
