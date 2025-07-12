import { useTheme } from "../../../shared/lib/theme/useTheme";
import Button from "../../../shared/ui/Button";
import styles from "./ThemeSwitcher.module.css";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      variant="secondary"
    >
      {theme === "light" ? "Dark 🌙" : "Light ☀️"}
    </Button>
  );
}

export default ThemeSwitcher;
