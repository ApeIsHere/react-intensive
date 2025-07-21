import type { ReactNode } from "react";
import styles from "../Modal.module.css";

type HeaderProps = {
  children: ReactNode;
};

function Header({ children }: HeaderProps) {
  return <h2 className={styles.header}>{children}</h2>;
}

export default Header;
