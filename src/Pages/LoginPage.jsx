import React, { useEffect } from 'react'

import Login from '../components/Login'

const LoginPage = () => {

  useEffect(()=>{
    fetch('http://localhost:4000/api/user/login', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({email:'sjemal99@gmail.com', password:'Pa$$w0rd'})
  })
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <>
      <div className='flex item-center justify-center my-20'>
        <Login />
      </div>
    </>
  )
}

export default LoginPage