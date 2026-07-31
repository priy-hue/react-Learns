import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const[numberAllowed,setNumberAllowed] = useState(false);
  const[characterAllowed,setCharacterAllowed] = useState(false);
  const[password,setPassword] = useState("");

  const passwordRef = useRef(null)
  //usecallback a React Hook that remembers (memoizes) a function
  const generatePassword = useCallback(()=>{  
    let pass = "" // we will store the password
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str += "0123456789" // if anyone checks numbers 
    }

    if(characterAllowed){
      str += "!@#$%^&*()_+"  // if anyone checks on character box .Then this will goes on
    }

    for(let i=0;i<length;i++){
      //math.random() to generate random no. and .floor() to round the number to nearest value
     const char =  Math.floor(Math.random() * str.length) // .length It gives the length of the string.
     // take the char from the string and append it to password
     pass += str.charAt(char) //charAt -> returns the character at the specified index in a string.
    }

    setPassword(pass)

  },[length,numberAllowed,characterAllowed])

  const copyPasswordToClipboard = () =>{
    window.navigator.clipboard.writeText(password) //copies text ot the clickboard
    passwordRef.current?.select()
  }

  useEffect(()=>{  // if any thing changes it starts again
    generatePassword();
  },[generatePassword])

  return (
     <div className="container">
      <div className="password-box">
        <h2>Password Generator</h2>

        <div className="input-box">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}>COPY</button>
        </div>

        <div className="options">
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setLength(Number(e.target.value))}
           
          />
          

          <span>Length: {length}</span>

          <label>
            <input type="checkbox" 
            checked = {numberAllowed}
            onChange={()=>{setNumberAllowed((prev)=> !prev)
            }}
            
            />
            Numbers
          </label>

          <label>
            <input type="checkbox" 
            checked = {characterAllowed}
            onChange={()=>{setCharacterAllowed((prev)=> !prev)
            }}
            
            />
            Characters
          </label>
        </div>
      </div>
    </div>
  
  )
}

export default App
