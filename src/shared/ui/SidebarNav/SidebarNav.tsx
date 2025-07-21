import { NavLink } from "react-router-dom";
import styles from "./SidebarNav.module.css";

type Link = {
  to: string;
  label: string;
  visible?: boolean;
};

type SidebarNavProps = {
  links: Link[];
};

function SidebarNav({ links }: SidebarNavProps) {
  return (
    <aside className={styles.container}>
      <nav className={styles.nav}>
        {links.map(
          ({ to, label, visible = true }) =>
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

export default SidebarNav;
