import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#000000',
        background: '#f3f3f3f3',
     

       
    },
    dark: {
        color: '#ffffff',
        background: '#000000',
   
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.dark)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}