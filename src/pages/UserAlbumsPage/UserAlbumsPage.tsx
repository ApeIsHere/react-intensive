import { useGetUserAlbumsQuery } from "../../entities/album/api/albumsApi";
import { useGetUserByIdQuery } from "../../entities/user/api/usersApi";
import AlbumsList from "../../widgets/AlbumsList/AlbumsList";
import styles from "./UserAlbumsPage.module.css";
import { useParams } from "react-router-dom";

function UserAlbumsPage() {
  const { id } = useParams();
  const userId = Number(id);
  const { data: userAlbums = [], isLoading: isAlbumsLoading } =
    useGetUserAlbumsQuery(userId);
  const { data: user, isLoading: isUserLoading } = useGetUserByIdQuery(userId);
  const isLoading = isAlbumsLoading || isUserLoading;
  const username = user?.username || "unknown user";

  // guard-clause
  if (isLoading) return <div>Loading albums</div>;

  if (!userAlbums.length) {
    return <div className={styles.empty}>No albums found for {username}</div>;
  }

  return (
    <div>
      <h2 className={styles.title}>{username}'s Albums</h2>
      <AlbumsList albums={userAlbums} />
    </div>
  );
}

export default UserAlbumsPage;
