import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { Outlet } from 'react-router-dom'
// it uses this Layout as base and baki cheejen change hongi
// like here header and footer same rhega but usek ander cheejen changehongi

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout