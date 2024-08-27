import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar'
import Footer from './components/Footer'

function Layout() {
  return (
    <div className ="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] ">
      <NavBar/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
