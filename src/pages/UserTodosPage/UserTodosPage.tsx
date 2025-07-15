import useUserData from "../../features/User/model/hooks/useUserData";
import styles from "./UserTodosPage.module.css";

function UserTodosPage() {
  const { userTodos, userName } = useUserData();

  // guard-clause
  if (!userTodos.length) {
    return <div className={styles.empty}>No todos found</div>;
  }

  return (
    <div>
      <h2>{userName} todos</h2>
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
