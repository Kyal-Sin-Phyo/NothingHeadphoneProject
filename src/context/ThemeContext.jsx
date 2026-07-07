import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { DEFAULT_THEME } from "../utils/constants";

const ThemesContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(DEFAULT_THEME);
    useEffect(() => {
        document.documentElement.classList.toggle(
            "light",
            theme === "light"
        );
    }, [theme]);
    const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark");
    return (
        <ThemesContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemesContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemesContext);
    if(!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
}