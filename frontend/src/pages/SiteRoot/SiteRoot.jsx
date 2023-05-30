import React from 'react'
import Footer from '../../layout/Footer/Footer'
import Header from '../../layout/Header/Header'
import { Outlet } from 'react-router-dom'

function SiteRoot() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default SiteRoot