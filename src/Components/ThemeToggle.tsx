import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ThemeToggle() {
    const context  = useContext(ThemeContext)

    if(!context){
        throw new Error ('Cannot switch toggle')
    }

    const {theme, setTheme}= context

     function HandleToggle(){
        setTheme(theme === 'light'?'dark':'light')
     }
  return (
    <div>
        <button onClick={HandleToggle}>click me</button>
      
    </div>
  )
}

export default ThemeToggle
