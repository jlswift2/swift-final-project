import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from './Navbar'

function Layout({ user, setUser }) {
  return (
    <div>
        <h1>Layout</h1>
        <Navbar user={user} setUser={setUser}/>
        <Outlet />
    </div>
  )
}

export default Layout