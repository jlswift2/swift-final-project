import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'

function Navbar({ user, setUser }) {
    return (
        <nav className="absolute top-[25%] h-1/2 w-full flex align-middle overflow-y-auto px-3 bg-gray-50 rounded dark:bg-gray-800" >
            <div className="m-auto w-full text-center">
                <LogoutButton user={user} setUser={setUser}/>
                {user ? <Link to="/land" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="flex-1 ml-3 whitespace-nowrap">My Landing Page</span>
                    </Link> 
                    : 
                    <Link to="/login"className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="flex-1 ml-3 whitespace-nowrap">My Landing Page</span>
                    </Link>
                }
                {user ? <Link to="/recipes" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="flex-1 ml-3 whitespace-nowrap">My Recipe Book</span>
                    </Link> 
                    : 
                    <Link to="/login" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="flex-1 ml-3 whitespace-nowrap">My Recipe Book</span>
                    </Link> 
                }
            </div>
        </nav>
    )
}

export default Navbar