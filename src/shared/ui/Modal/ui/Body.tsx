import type { ReactNode } from "react";
import styles from "../Modal.module.css";

type BodyProps = {
  children: ReactNode;
};

function Body({ children }: BodyProps) {
  return <p className={styles.body}>{children}</p>;
}

export default Body;
