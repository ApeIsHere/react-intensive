import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import Button from "../../shared/ui/Button";
import styles from "./LayoutHeader.module.css";

function LayoutHeader() {
  return (
    <header className={styles.header}>
      <p className={styles.text}>The most fascinating app in the world</p>
      <span className={styles.switch}>
        <ThemeSwitcher />
      </span>
      <Button variant="secondary">about</Button>
    </header>
  );
}

export default LayoutHeader;
