import { useLocation, useParams } from "react-router-dom";
import styles from "./AlbumPhotosPage.module.css";
import { useState } from "react";
import Modal from "../../shared/ui/Modal";
import type { Photo } from "../../entities/photo/model/types";
import PhotoList from "../../widgets/PhotoList/PhotoList";
import { useGetAlbumPhotosQuery } from "../../entities/photo/api/photosApi";
import AlbumPhotosSkeleton from "../../shared/ui/Skeletons/AlbumPhotosSkeleton/AlbumPhotosSkeleton";

function AlbumPhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const { id } = useParams(); // albumId
  const albumId = Number(id);
  const { data: albumPhotos = [], isLoading } = useGetAlbumPhotosQuery(albumId);
  const { state: albumTitle } = useLocation();

  const handleClick = (photo: Photo) => setSelectedPhoto(photo);
  const closeModal = () => setSelectedPhoto(null);

  // guard-clause
  if (isLoading) return <AlbumPhotosSkeleton />;

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
          <Modal.Body>
            <img
              // src={selectedPhoto.url}
              src="https://placehold.co/800x600"
              alt={selectedPhoto.title}
              className={styles.modalImg}
              loading="lazy"
            />
          </Modal.Body>
          <Modal.Header>{selectedPhoto.title}</Modal.Header>
        </Modal>
      )}
    </>
  );
}

export default AlbumPhotosPage;
