import React, { createContext, useState, useContext } from "react";

const themeStylesRight = {
  dark: {
    background: "#17223B",
    cardBackground: "#263859",
    cardShadow: "0 0 8px #6B778D",
    circle: "8px solid #6B778D",
    deleteButton: "#FF6768",
    textColor: "hsl(270, 12%, 93%)",
  },
  light: {
    background: "#009DAE",
    cardBackground: "#71DFE7",
    cardShadow: "0 0 8px #C2FFF9",
    circle: "8px solid #C2FFF9",
    deleteButton: "#FFE652",
  },
};

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  const value = {
    theme: themeStylesRight[theme],
    toggleTheme,
    themeName: theme,
  };
  return <ThemeContext.Provider value={value} {...props} />;
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider as default, useTheme };
