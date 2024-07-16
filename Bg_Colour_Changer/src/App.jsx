import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("pink");//setColor is pink

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
          <button onClick={()=> setColor("red")}    className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=> setColor("green")}  className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=> setColor("blue")}   className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=> setColor("yellow")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=> setColor("white")}  className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"white"}}>white</button>
          <button onClick={()=> setColor("black")}  className="outline-none px-4 py-1 rounded-full text-cyan-50" style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=> setColor("pink")}   className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=> setColor("purple")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=> setColor("brown")}  className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"brown"}}>Brown</button>
          <button onClick={()=> setColor("olive")}  className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"olive"}}>Olive</button>
          <button onClick={()=> setColor("gray")}   className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"gray"}}>Gray</button>
          <button onClick={()=> setColor("lavender")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"lavender"}}>Lavender</button>
        </div>
      </div>
    </>

  )
}

export default App
