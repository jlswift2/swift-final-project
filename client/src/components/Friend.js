import React from 'react'
import { Link } from 'react-router-dom'

function Friend({ friend }) {
    let link = `/recipes/friends/${friend.id}`
  
    return (
        <div className="font-serif mb-6 text-xl md:text-xl flex justify-center text-green-800">
            <Link to={link}>{friend.username}</Link>
        </div>
    )
}

export default Friend