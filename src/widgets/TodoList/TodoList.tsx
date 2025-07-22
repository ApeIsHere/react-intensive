import type { Todo } from "../../entities/todo/model/types";
import ItemList from "../../shared/ui/ItemList/ItemList";
import styles from "./TodoList.module.css";

type TodoListProps = {
  todos: Todo[];
};

function TodoList({ todos }: TodoListProps) {
  return (
    <ItemList
      items={todos}
      ulClassName={styles.list}
      liClassName={styles.item}
      renderItem={(todo) => (
        <>
          <input type="checkbox" checked={todo.completed} readOnly />
          <span className={`${todo.completed ? styles.completed : ""}`}>
            {todo.title}
          </span>
        </>
      )}
    />
  );
}

export default TodoList;
