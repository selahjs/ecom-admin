import React from 'react'
import { Outlet } from 'react-router-dom'

import NavbarC from './NavbarC'
import FooterC from './FooterC'

const Layout = () => {
  return (
    <div>
        <NavbarC />
        <div className="mx-10">
            <Outlet />
        </div>
        <FooterC />
    </div>
  )
}

export default Layout