import React from 'react'
import { useNavigate } from 'react-router-dom'

function LogoutButton({ user, setUser}) {
    
    let navigate = useNavigate()

    let button

    if (user){
        button = <button onClick={handleLogout} className="flex w-full items-center p-2 text-base font-normal text-red-500 rounded-lg dark:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span className="flex-1 ml-3 whitespace-nowrap text-xl">Logout</span>
            </button>
    } else {
        button = <button onClick={() => navigate('/login')} className="flex w-full items-center p-2 text-base font-normal text-green-500 rounded-lg dark:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span className="flex-1 ml-3 whitespace-nowrap text-xl">Login</span>
            </button>
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