import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"

import Login from '../components/Login'

const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const dispatch = useDispatch();

  const login = async  (event ,user) => {
    event.preventDefault()
    const response = await fetch('http://localhost:3001/api/user/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
    const json = await response.json()
    if(response.ok){
      setUser(json)
      setError(null)
      dispatch({type: 'LOGIN', payload:{username:json.username, loggedIn: true}})
      console.log(json, 'successfully logged in!')
      navigate("/admin")
    }else{
      setError(json.error)
    }
  }
  return (
    <>
      <div className='flex item-center justify-center my-20'>
        <Login login={login} error={error}/>
      </div>
    </>
  )
}

export default LoginPage