import styles from "./UserTodosSkeleton.module.css";

function UserTodosSkeleton() {
  return (
    <div>
      <h2 className={styles.title}></h2>
      <ul className={styles.list}>
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i} className={styles.item}>
            <input type="checkbox" readOnly />
            <span></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserTodosSkeleton;
