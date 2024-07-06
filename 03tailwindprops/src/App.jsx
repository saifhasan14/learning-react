import useState from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from "./components/Cards"


// this is Comment and this is good anyway
function App() {
  let myarr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >MY PROJECT</h1>
      <Cards username="chai aur code" btnText="NEWBTN" someObj={myarr}/>
      <Cards username={"saif hasan"} />
    </>
  )
}

export default App
