import useUserData from "../../features/User/model/hooks/useUserData";
import styles from "./UserAlbumsPage.module.css";
import { Link } from "react-router-dom";

function UserAlbumsPage() {
  const { userAlbums, userName } = useUserData();

  // guard-clause
  if (!userAlbums.length) {
    return <div className={styles.empty}>No albums found for {userName}</div>;
  }

  return (
    <div>
      <h2 className={styles.title}>{userName}'s Albums</h2>
      <ul className={styles.list}>
        {userAlbums.map((album) => (
          <li key={album.id} className={styles.album}>
            <Link to={`/albums/${album.id}/photos`} className={styles.link}>
              {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserAlbumsPage;
