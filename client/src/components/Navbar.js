import React from 'react'
import LogoutButton from './LogoutButton'

function Navbar({ user, setUser }) {
    return (
        <nav>
            <LogoutButton user={user} setUser={setUser}/>
        </nav>
    )
}

export default Navbar