import { ThemeContext } from "@/store";
import { ReactNode, useState } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark(prev => !prev);
  }

  const context = { isDark, toggleTheme };
  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
}
