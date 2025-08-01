import styles from "./AlbumPhotosSkeleton.module.css";

function AlbumPhotosSkeleton() {
  return (
    <>
      <h2 className={styles.title}></h2>
      <div className={styles.grid}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={styles.card}></div>
        ))}
      </div>
    </>
  );
}

export default AlbumPhotosSkeleton;
