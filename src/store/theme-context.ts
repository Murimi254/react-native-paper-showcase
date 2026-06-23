import { createContext } from "react";
export type ThemeData = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeData | undefined>({ isDark: false, toggleTheme: () => {} });
