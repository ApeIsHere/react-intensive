import styles from "./UserAlbumsSkeleton.module.css";

function UserAlbumsSkeleton() {
  return (
    <div>
      <h2 className={styles.title}></h2>
      <ul className={styles.list}>
        {Array.from({ length: 7 }).map((_, i) => (
          <li key={i} className={styles.album}></li>
        ))}
      </ul>
    </div>
  );
}

export default UserAlbumsSkeleton;
