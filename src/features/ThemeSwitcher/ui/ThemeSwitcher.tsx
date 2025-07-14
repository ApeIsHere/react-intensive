import { useTheme } from "../../../shared/lib/theme/useTheme";
import Button from "../../../shared/ui/Button";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} aria-label="Toggle theme" variant="rounded">
      {theme === "light" ? "Dark 🌙" : "Light ☀️"}
    </Button>
  );
}

export default ThemeSwitcher;
