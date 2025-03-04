
import React, { useState, useCallback, useEffect, useRef } from "react";

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null) 

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIjklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&**{}[]~"

    for(let i=1; i<=length; i++){                    //randomly generate passwd
       let char = Math.floor(Math.random() * str.length +1)

       pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()                      //copy karneke baad select hoga effect reference leke effect dena
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  },[password])  //dependency depends on something

  
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])  //putting it into memory by useCallback

  return (
   <>
     
     <h1>Password Generator</h1>
     <input
        type="text"
        value={password}
        placeholder='password'
        readOnly
        ref={passwordRef}
     />

     <button 
     onClick={copyPasswordToClipboard}>copy</button>

     <input 
        type="range"
        min={6}
        max={100}
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
   
     />
     <label>Length: {length}</label>

     <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev);  //reversing prev value
        }}

     />

       <label htmlFor="numberInput">Numbers</label>

       <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={() => {
          setCharAllowed((prev) => !prev);  //reversing prev value //callback fired set prev to new value
        }}

     />

      <label htmlFor="characterInput">Characters</label>
   </>
  );
}

export default App;





