import React from 'react'
// import {Header,Footer,Home} from './Components/index.js'
import Header from './Components/Header/Header.jsx'
import Home from './Components/Home/Home.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import Footer from './Components/Footer/Footer.jsx'  
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout