import React from 'react'

import Login from '../components/Login'
import NavbarC from "../components/NavbarC";
import FooterC from '../components/FooterC';

const LoginPage = () => {
  return (
    <>
      <NavbarC />
      <div className='flex item-center justify-center my-20'>
        <Login />
      </div>
      <FooterC />
    </>
  )
}

export default LoginPage