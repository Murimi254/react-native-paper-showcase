import { useContext } from "react";
import { ThemeContext } from "../store/theme-context";

export function useAppTheme() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext || themeContext === undefined) {
    throw new Error("useTheme should be used within a ThemeProvider.");
  }
  return themeContext;
}
