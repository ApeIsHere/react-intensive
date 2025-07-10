import type { ReactNode } from "react";
import styles from "./MainLayout.module.css";

type MainLayoutProps = {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
};

function MainLayout({ header, content, footer }: MainLayoutProps) {
  return (
    <div className={styles.page}>
      {header}
      <div className={styles.content}>{content}</div>
      {footer}
    </div>
  );
}

export default MainLayout;
