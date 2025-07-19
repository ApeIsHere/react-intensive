import { useParams } from "react-router-dom";
import { useGetUserTodosQuery } from "../../entities/todo/api/todosApi";
import styles from "./UserTodosPage.module.css";
import { useGetUserByIdQuery } from "../../entities/user/api/usersApi";

function UserTodosPage() {
  const { id } = useParams();
  const userId = Number(id);
  const { data: userTodos = [], isLoading: isTodosLoading } =
    useGetUserTodosQuery(userId);
  const { data: user, isLoading: isUserLoading } = useGetUserByIdQuery(userId);
  const isLoading = isTodosLoading || isUserLoading;
  const username = user?.username || "unknown user";

  // guard-clause
  if (isLoading) return <div>Loading albums</div>;

  if (!userTodos.length) {
    return <div className={styles.empty}>No todos found for {username}</div>;
  }

  return (
    <div>
      <h2 className={styles.title}>{username} todos</h2>
      <ul className={styles.list}>
        {userTodos.map((todo) => (
          <li
            key={todo.id}
            className={`${styles.item} ${todo.completed ? styles.completed : ""}`}
          >
            <input type="checkbox" checked={todo.completed} readOnly />
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserTodosPage;
