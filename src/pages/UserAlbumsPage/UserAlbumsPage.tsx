import useUserData from "../../features/User/model/hooks/useUserData";
import AlbumsList from "../../widgets/AlbumsList/AlbumsList";
import styles from "./UserAlbumsPage.module.css";

function UserAlbumsPage() {
  const { userAlbums, userName } = useUserData();

  // guard-clause
  if (!userAlbums.length) {
    return <div className={styles.empty}>No albums found for {userName}</div>;
  }

  return (
    <div>
      <h2 className={styles.title}>{userName}'s Albums</h2>
      <AlbumsList albums={userAlbums} />
    </div>
  );
}

export default UserAlbumsPage;
