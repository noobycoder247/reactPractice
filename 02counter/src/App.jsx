import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1); // Here useState will return 2 things one is value and another is function to chnage that value
  
  const increaseValue = ()=>{
    setCounter(counter+1);
  }
  const decreaseValue = ()=>{
    if (counter > 0) {
      setCounter(counter-1);
    }
  }  
  // As you see below i have added 5 counter display to show counter value
  // What i have to do in js that if i want to update every counter value the i have to select all the element 
  // one by one and the change the innerHtml of all the elements but here i dont have to do this.
  // Here i just have to use  useState method that given by useState (for here "setCounter") i just have to call
  // it when ever i want and it will update counter value all the places
  // This is fucking imagine

  return (
    <>
      <h1>Counter Demo</h1>
      <h2>Counter Display 1 {counter}</h2>
      <h2>Counter Display 2 {counter}</h2>
      <h2>Counter Display 3 {counter}</h2>
      <h2>Counter Display 4 {counter}</h2>
      <h2>Counter Display 5 {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button> &nbsp;
      <button onClick={decreaseValue}>Decrease Value</button>

    </>
  )
}

export default App
