import { createContext, useEffect, useState } from "react";

type Theme = 'light' | 'dark'
type ThemeContextType = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

type ThemeContextProviderProps ={
    children: React.ReactNode
}
export const ThemeContext = createContext<ThemeContextType  | null>(null)

export const ThemeContextProvider = ({children}: ThemeContextProviderProps)=>{
    const [theme, setTheme] = useState<Theme>('light')
    
    useEffect(()=>{
        document.documentElement.className = theme
    }, [theme])

    return (
        <ThemeContext.Provider value ={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}