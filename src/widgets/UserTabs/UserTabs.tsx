import { NavLink, useLocation, useParams } from "react-router-dom";
import styles from "./UserTabs.module.css";

function UserTabs() {
  const { id } = useParams();
  const location = useLocation();

  //проверяем какой именно id мы получили
  const isPostId = id !== undefined && location.pathname.startsWith(`/posts/${id}`);
  const isUserId = id !== undefined && location.pathname.startsWith(`/users/${id}`);
  const isAlbumId = id !== undefined && location.pathname.startsWith(`/albums/${id}`);

  const links = [
    { to: "/", label: "Home", visible: true },
    { to: `/posts/${id}`, label: "Post", visible: isPostId },
    { to: `/users/${id}/posts`, label: "Posts", visible: isUserId },
    { to: `/users/${id}/todos`, label: "Todos", visible: isUserId },
    { to: `/users/${id}/albums`, label: "Albums", visible: isUserId },
    { to: `/albums/${id}/photos`, label: "Album", visible: isAlbumId },
  ];

  return (
    <aside className={styles.container}>
      <nav className={styles.tabs}>
        {links.map(
          ({ to, label, visible }) =>
            visible && (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {label}
              </NavLink>
            )
        )}
      </nav>
    </aside>
  );
}

export default UserTabs;
