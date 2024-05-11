import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-150" style={{background: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg rounded-xl bg-white p-2'>
          <button className='outline-none px-6 py-2 rounded-xl text-white shadow-xl' style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>RED</button>
          <button className='outline-none px-6 py-2 rounded-xl text-white shadow-xl' style={{backgroundColor: "black"}} onClick={()=>setColor("black")}>BLACK</button>
          <button className='outline-none px-6 py-2 rounded-xl text-white shadow-xl' style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green</button>
          <button className='outline-none px-6 py-2 rounded-xl text-white shadow-xl' style={{backgroundColor: "blue"}} onClick={()=>setColor("blue")}>BLUE</button>
          <button className='outline-none px-6 py-2 rounded-xl text-white shadow-xl' style={{backgroundColor: "olive"}} onClick={()=>setColor("olive")}>OLIVE</button>
          </div>
      </div>
    </div>
  )
}

export default App
