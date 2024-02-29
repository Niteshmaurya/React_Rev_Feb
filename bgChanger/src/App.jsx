import { useState } from "react"

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ><div className="fixed flex flex-wrap  bottom-12 justify-center inset-x-0 px-9 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl
      ">
        <button
        onClick={()=>  setColor("green") }
      className="outline-none px-4 py-1 rounded-full shadow-xlg " 
      style={{backgroundColor: "green"}}
      >green</button>
        <button
        onClick={()=>  setColor("red") }
      className="outline-none px-4 py-1 rounded-full shadow-xlg " 
      style={{backgroundColor: "red"}}
      >red</button>
        <button
        onClick={()=>  setColor("blue") }
      className="outline-none px-4 py-1 rounded-full shadow-xlg " 
      style={{backgroundColor: "blue"}}
      >blue</button>
        <button
        onClick={()=>  setColor("Pink") }
      className="outline-none px-4 py-1 rounded-full shadow-xlg " 
      style={{backgroundColor: "Pink"}}
      >Pink</button>
        <button
        onClick={()=>  setColor("Olive") }
      className="outline-none px-4 py-1 rounded-full shadow-xlg " 
      style={{backgroundColor: "Olive"}}
      >Olive</button>
        <button
        onClick={()=>  setColor("Grey") }
      className="outline-none px-4 py-1 rounded-full shadow-xlg " 
      style={{backgroundColor: "Grey"}}
      >Grey</button>
        <button
        onClick={()=>  setColor("Lavender ") }
      className="outline-none px-4 py-1 rounded-full shadow-xlg " 
      style={{backgroundColor: "Lavender  "}}
      >Lavender </button>
          </div>
          
          
        </div>
        
      </div>


    </>
  )
}

export default App
