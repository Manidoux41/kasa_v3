import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Layouts/Footer'
import Header from '../../components/Layouts/Header'

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