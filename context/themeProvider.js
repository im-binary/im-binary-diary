import { lightTheme, darkTheme } from "../src/Theme/theme";
import { createContext, useState, useContext, useCallback, useEffect } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState();

  useEffect(() => {
    // 안에서 window 객체를 사용
    const localTheme = window.localStorage.getItem("theme") || "light";
    setThemeMode(localTheme);
  }, []);

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
      if (typeof window !== undefined) {
        window.localStorage.setItem("theme", "dark");
      }
    } else {
      setThemeMode("light");
      if (typeof window !== undefined) {
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [setThemeMode, themeMode]);

  return [themeMode, toggleTheme];
}

export { ThemeProvider, useTheme };
