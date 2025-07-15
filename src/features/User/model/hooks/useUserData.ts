import { useParams } from "react-router-dom";
import { mockAlbums, mockPosts, mockTodos } from "../../../../shared/constants/constants";

function useUserData() {
  const { id } = useParams();
  const userId = Number(id);

  const userTodos = mockTodos.filter((todo) => todo.userId === userId);
  const userAlbums = mockAlbums.filter((album) => album.userId === userId);
  const userPosts = mockPosts.filter((post) => post.userId === userId);
  const userName = userPosts[0]?.userName ?? "Unknown";

  return { userId, userName, userTodos, userAlbums, userPosts };
}

export default useUserData;
