import { useContext } from "react";
import { lightTheme, darkTheme } from "assets/theme";
import { ThemeContext } from "contexts/ThemeContext";

const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return { theme, toggleTheme, currentTheme };
};

export default useTheme;
