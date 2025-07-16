import type { ReactNode } from "react";
import styles from "./MainLayout.module.css";

type MainLayoutProps = {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
  tabs: ReactNode;
};

function MainLayout({ header, content, footer, tabs }: MainLayoutProps) {
  return (
    <div className={styles.page}>
      <div className={styles.header}>{header}</div>
      <div className={styles.tabs}>{tabs}</div>
      <main className={styles.content}>
        <div className={styles.contentWrapper}>{content}</div>
      </main>
      <footer className={styles.footer}>{footer}</footer>
    </div>
  );
}

export default MainLayout;
