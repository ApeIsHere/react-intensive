import { useParams } from "react-router-dom";
import { useGetTodosQuery } from "../../entities/todos/api/todosApi";
import styles from "./UserTodosPage.module.css";

function UserTodosPage() {
  const { id } = useParams();
  const userId = Number(id);
  const { data: userTodos = [], isLoading } = useGetTodosQuery(userId);
  const userName = "TEMP";

  // guard-clause
  if (isLoading) return <div>Loading albums</div>;

  if (!userTodos.length) {
    return <div className={styles.empty}>No todos found for {userName}</div>;
  }

  return (
    <div>
      <h2 className={styles.title}>{userName} todos</h2>
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
