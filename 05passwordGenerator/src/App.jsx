import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [useNum, setUseNum] = useState(false);
  const [useCharacter, setUseCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null); // Use reference hum kisi html element ko pass krte hai and uss element ko hum JS mai use kr sakte hai like hum document.getqueryselector() use krte hai kisi element ko select krne ke liye but in standard way

  // We can make this project without "useCallback" by pasting the callback code directly to useEffect
  // Par humko isse optmize krna hai issi liye hum use useCallback use krte hai ye chezo ko memory mai rakhta hai
  // Ye cheezo ko yaad krke usse re-use krta hai
  const passwordGenerator = useCallback(() => { // UseCallback is reposible for caching(memozation) or you can say for optimizing that 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (useNum) {
      str += "1234567890"
    }
    if (useCharacter) {
      str += "!@#$%^&*()-_+={[]}:;"
    }
    let password = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length); // Gnerate integer between 0 to string length
      password += str[index];
    }
    setPassword(password);

  }, [length, useNum, useCharacter, setPassword]) //you pass setPassword or not it's doesn't matter, it's just for memoization

  const copyToClipBoard = useCallback(()=>{
    // console.log(passwordRef.current); // <input type="text" class="outline-none w-full py-1 px-3" placeholder="Password" readonly="" value="3#f9ZP&amp;_9t$ifzKve">
    // console.log(passwordRef.current.value); // 3#f9ZP&amp;_9t$ifzKve
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]) //dependencies

  useEffect(() => { // If any change in in following dependencies then re run the callback and it will run once when page loads
    passwordGenerator();
  }, [length, useNum, useCharacter, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md bg-gray-700 rounded-lg p-4 my-8 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef} //
            onClick={copyToClipBoard}
          />
          <button className='outline-none bg-lime-600 text-white px-3' onClick={copyToClipBoard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={useNum}
              id="numberInput"
              onChange={() => { setUseNum((prev) => !prev) }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={useCharacter}
              id="characterInput"
              onChange={() => { setUseCharacter((prev) => !prev) }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
