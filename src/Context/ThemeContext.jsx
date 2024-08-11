import { createContext } from "react";

export const themeContext=createContext({
    themeMode:"dark",
    lightMode:()=>{
    },
    DarkMode:()=>{

    }
})
export const themeProvider=themeContext.Provider()
