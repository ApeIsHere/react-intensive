import { useTheme } from "../../../shared/lib/theme/useTheme";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>{theme === "light" ? "Dark 🌙" : "Light ☀️"}</button>
  );
}

export default ThemeSwitcher;
