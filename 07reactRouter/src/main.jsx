import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
// import {Header, Home} from './Components/index.js'
import Header from './Components/Header/Header.jsx'
import Home from './Components/Home/Home.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Github from './Components/Github/Github.jsx'
import Contact from './Components/ContactUs/Contact.jsx'
import { Route } from 'react-router-dom'
import User from './Components/User/User.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "AboutUs",
//         element: <AboutUs />
//       },
//       {
//         path: "Contact",
//         element: <Contact/>
//       },
//       {
//         path:"Github",
//         element:<Github/>
//       }
//     ]
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element ={<Home/>}/>
      <Route path='aboutUs' element ={<AboutUs/>}/>
      <Route path='Contact' element ={<Contact/>}/>
      <Route path='Github' element ={<Github/>}/>
      <Route path='User/:userid' element ={<User/>}/>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
