import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)    // ---> this is hooks -> useState,useEffect... 

  // counter is variable and setCounter is function for the counter 
  // setCounter ye dekhta hai ki counter ki next value kya hogi this is nothing but hooks

  const addValue = () =>{
    counter = counter+1;
    console.log("value added", counter)
    setCounter(counter)
  }
  
  const removeValue = () =>{
    if(counter>10){

      setCounter(counter-1);
    }
    

  
}
  
// let counter = 15;
  return (
  <>
 
  
  <h1>chai aur react</h1>
  <h2>Counter is {counter}</h2>


  <button 
  onClick={addValue}
  >Add value </button>
  <br />
  <button
  onClick={removeValue}
  
  >Remove value </button>
  </>
  )

}

export default App
