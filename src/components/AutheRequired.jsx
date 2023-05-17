import React, {useState} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

const AutheRequired = () => {
    const {loggedIn} = useSelector((state)=>state)
    if(!loggedIn){
        return <Navigate to="/login"/>
    }
    return (
        < Outlet />
    )
}

export default AutheRequired