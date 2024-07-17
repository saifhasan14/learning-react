
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Cards'

function App() {

  const [themeMode, setThemeMode] = useState("light")


  // creating function of "same name" as value in "themeProvider" adds FUNCTIONALITY to them
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme
  useEffect(() => {
    // this is javascript and tailwiind exclusive
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])
  

  // THE METHOD HERE -> LIGHT THEME, ... DOES HAVE FUNCTIONALITY as we have defined it
  return (
    // here themeProvider me value and method ka access le rhe hai
    // so that components ko access milega 
    <ThemeProvider value= {{themeMode, lightTheme, darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>

  )
}

export default App
