import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  return (
    <>
      <div className ="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] ">
        <NavBar />
          {/* <Login />    */}
          <Signup />
        <Footer />
      </div>
    </>
  )
}

export default App
