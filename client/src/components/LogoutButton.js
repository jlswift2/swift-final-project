import React from 'react'
import { useNavigate } from 'react-router-dom'

function LogoutButton({ user, setUser}) {
    
    let navigate = useNavigate()

    let button
        if (user){
            button = <button onClick={handleLogout}>Logout</button>
        } else {
            button = <button onClick={() => navigate('/login')}>Login</button>
        }

    function handleLogout () {
        fetch("/logout", {
        method: "DELETE",
        }).then(() => onLogout());
    }

    function onLogout() {
        setUser(null)
        navigate('/')
    }


    return (
    <span>
        {button}
    </span>
    )
}

export default LogoutButton