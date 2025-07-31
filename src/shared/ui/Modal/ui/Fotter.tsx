import type { ReactNode } from "react";
import styles from "../Modal.module.css";

type FooterProps = {
  children: ReactNode;
};

function Footer({ children }: FooterProps) {
  return <div className={styles.footer}>{children}</div>;
}

export default Footer;
