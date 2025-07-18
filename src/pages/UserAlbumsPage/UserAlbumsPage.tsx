import AlbumsList from "../../widgets/AlbumsList/AlbumsList";
import { useGetAlbumsQuery } from "../../entities/albums/api/albumsApi";
import styles from "./UserAlbumsPage.module.css";
import { useParams } from "react-router-dom";

function UserAlbumsPage() {
  const { id } = useParams();
  const userId = Number(id);
  const { data: userAlbums = [], isLoading } = useGetAlbumsQuery(userId);
  const userName = "TEMP";

  // guard-clause
  if (isLoading) return <div>Loading albums</div>;

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
