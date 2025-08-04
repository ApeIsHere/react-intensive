import { useParams } from "react-router-dom";
import { useGetUserTodosQuery } from "../../entities/todo/api/todosApi";
import styles from "./UserTodosPage.module.css";
import { useSelector } from "react-redux";
import { selectUserById } from "../../entities/user/model/slice/userSlice";
import type { RootState } from "../../app/providers/store/store";
import UserTodosSkeleton from "../../shared/ui/Skeletons/UserTodosSkeleton/UserTodosSkeleton";
import TodoList from "../../widgets/TodoList/TodoList";

function UserTodosPage() {
  const { id } = useParams();
  const userId = Number(id);
  const user = useSelector((state: RootState) => selectUserById(state, userId));
  const username = user?.username || "unknown user";

  const { data: userTodos = [], isLoading } = useGetUserTodosQuery(userId);

  // guard-clause
  if (isLoading) return <UserTodosSkeleton />;

  if (!userTodos.length) {
    return <div className={styles.empty}>No todos found for {username}</div>;
  }

  return (
    <div>
      <h2 className={styles.title}>{username} todos</h2>
      <TodoList todos={userTodos} />
    </div>
  );
}

export default UserTodosPage;
