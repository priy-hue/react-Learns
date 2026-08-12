// so whenever we go on the next page the header and footer remains same so to avoid the change of header and footer we are using it.

import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function layout() {
  return (
    <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default layout