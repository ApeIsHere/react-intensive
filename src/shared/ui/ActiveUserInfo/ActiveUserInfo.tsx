import { Link } from "react-router-dom";
import { useActiveUser } from "../../hooks/useActiveUser";
import styles from "./ActiveUserInfo.module.css";
import Tippy from "@tippyjs/react";

function ActiveUserInfo() {
  const activeUser = useActiveUser();

  return (
    <div className={styles.container}>
      {activeUser ? (
        <>
          <p className={styles.label}>Active user:</p>
          <Tippy
            content={`Show posts by: ${activeUser.username}`}
            placement="top"
            arrow
            theme="accented"
          >
            <Link to={`/users/${activeUser.id}/posts`} className={styles.name}>
              {activeUser.username}
            </Link>
          </Tippy>
        </>
      ) : (
        <span className={styles.label}>Select active user</span>
      )}
    </div>
  );
}

export default ActiveUserInfo;
