import { createContext, useContext} from "react";

// another method for ccreating context

// now giving default value when it created for the first time
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},

})

//writing provider in same file
export const ThemeProvider = ThemeContext.Provider

// DIFFERENT CODING STRUCTURE NOWADAYS USED

// making custom hook to minimize import statement
export default function useTheme(){
    return useContext(ThemeContext)
}