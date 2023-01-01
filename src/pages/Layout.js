import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = () => {
  return (
    <div className='Layout'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout