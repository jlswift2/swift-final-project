import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from './Navbar'

function Layout({ user, setUser }) {
  return (
    <div>
        <div className="fixed h-full w-1/6 left-0">
          <Navbar user={user} setUser={setUser}/>
        </div>
        <div className="absolute w-5/6 right-0 pl-5">
          <Outlet />
        </div>
    </div>
  )
}

export default Layout