import { useSelector } from "react-redux";
import { useGetUserAlbumsQuery } from "../../entities/album/api/albumsApi";
import { useParams } from "react-router-dom";
import type { RootState } from "../../app/providers/store/store";
import { selectUserById } from "../../entities/user/model/slice/userSlice";
import AlbumsList from "../../widgets/AlbumsList/AlbumsList";
import styles from "./UserAlbumsPage.module.css";
import UserAlbumsSkeleton from "../../shared/ui/Skeletons/UserAlbumsSkeleton/UserAlbumsSkeleton";

function UserAlbumsPage() {
  const { id } = useParams();
  const userId = Number(id);
  const user = useSelector((state: RootState) => selectUserById(state, userId));
  const username = user?.username || "unknown user";

  const { data: userAlbums = [], isLoading } = useGetUserAlbumsQuery(userId);

  // guard-clause
  if (isLoading) return <UserAlbumsSkeleton />;

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
