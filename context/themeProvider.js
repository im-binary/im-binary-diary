import { lightTheme, darkTheme } from "../src/Theme/theme";
import { createContext, useState, useContext, useCallback, useEffect } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const localTheme = localStorage.getItem("theme") || "light";
  const [themeMode, setThemeMode] = useState(localTheme);

  const themeObject = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  const { themeMode, setThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (themeMode === "light") {
      setThemeMode("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setThemeMode("light");
      localStorage.setItem("theme", "light");
    }
  }, [setThemeMode, themeMode]);

  return [themeMode, toggleTheme];
}

export { ThemeProvider, useTheme };
