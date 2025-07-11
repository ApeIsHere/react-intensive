import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "./ThemeProvider";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeContext is used outside ThemeContext Provider");
  }
  return context;
};
