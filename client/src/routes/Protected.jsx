import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

function Protected({allowedRoles}) {
    const {user}=useSelector((state)=>state.user);
    console.log(user);
  return (
    <Outlet/>
  )
}

export default Protected