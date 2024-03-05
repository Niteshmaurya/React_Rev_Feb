import './App.css' 
import React ,{useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from "./Store/authSlice"
// import {Header} from './components/Header/Header'
// import {Footer} from './components/Footer/Footer'
import { Header,Footer } from './components'

function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setloading(false))
  },[])

  return !loading? (
    <div className='min-h-sc flex content-between flex-wrap bg-grey-800'> 
    <div className='w-full block'>
      <Header/>
      <main>
        TODO: {/* <outlet/> */}
      </main>
      <Footer/>
      </div>
      </div>
  ) : null
}

export default App
