import { useParams } from "react-router-dom";
import { mockAlbums, mockTodos } from "../../../../shared/constants/constants";

function useUserData() {
  const { id } = useParams();
  const userId = Number(id);

  const userTodos = mockTodos.filter((todo) => todo.userId === userId);
  const userAlbums = mockAlbums.filter((album) => album.userId === userId);

  return { userId, userTodos, userAlbums };
}

export default useUserData;
