import type { ReactNode } from "react";
import styles from "./MainLayout.module.css";

type MainLayoutProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
};

function MainLayout({ children, header, footer }: MainLayoutProps) {
  return (
    <div className={styles.page}>
      {header}
      <main className={styles.content}>{children}</main>
      {footer}
    </div>
  );
}

export default MainLayout;
