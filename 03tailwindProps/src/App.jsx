import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componenets/Card'

function App() {
  console.log();

  return (
    <>  
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>This is nitesh</h1>  

   <Card username = "vijay"/>
   <Card sirname = "kumar" username = "Amit"/>

    </>
  )
}

export default App
