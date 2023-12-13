import React, { createContext, useState } from "react";
import { themes } from "../themes/themes";  // import themes

// create context
export const ThemeContext = createContext({
    theme: themes.dark, // set default theme
    toggleTheme: () => {}, // create toggleTheme
}); 
    

export const ThemeProvider = ({ children }) => {
    const[theme, setTheme] = useState(themes.light); // set default theme

    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme.mode === "dark" ? themes.light : themes.dark);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
