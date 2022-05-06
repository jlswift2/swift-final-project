import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'

function Navbar({ user, setUser }) {
    return (
        <nav>
            <LogoutButton user={user} setUser={setUser}/>
            {user ? <Link to="/land">My Landing Page</Link> : <Link to="/login">My Landing Page</Link>}
            {user ? <Link to="/recipes">My Recipe Book</Link> : <Link to="/login">My Recipe Book</Link>}
        </nav>
    )
}

export default Navbar