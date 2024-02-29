import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import { useContext } from 'react'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <UserContextProvider>
   <h1>This is context API</h1>
   <Login/>       
   <br />
   <Profile/>
   </UserContextProvider>
   </>
  )
}

export default App
 