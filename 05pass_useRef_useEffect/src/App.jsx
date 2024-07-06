import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // UseRef hook
  const passwordRef = useRef(null)  

  // useCallback -> optimization
  // useeffct -> render on any change in dependency array and run itself for first time
  
  // const passwordGenerator = useCallback( function def, [dependency array])

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let charInd = Math.floor( Math.random() * str.length + 1 )
      pass += str.charAt(charInd);
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword])

    // useCallback -> optimization
  const copyPasswordToCLipboard = useCallback( () => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(3,6);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h2 className='text-white text-center  my-3'>Password generator</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 rounded-lg mr-3"
          placeholder="Password"
          readOnly
          // now i have reference
          ref={passwordRef}
          />

        <button
        onClick={copyPasswordToCLipboard}
        // className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ml-1.5'
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >copy</button>
        </div>

      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={ (e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
              setNumAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="numberInput"
            onChange={() => {
                setCharAllowed((prev) => !prev);
            }}
        />
      <label htmlFor="numberInput">Char</label>
      </div>
      </div>

      </div>
    </>
  )
}

export default App
