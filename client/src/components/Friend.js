import React from 'react'
import { Link } from 'react-router-dom'

function Friend({ friend }) {
    let link = `/recipes/friends/${friend.id}`
  
    return (
        <div>
            <Link to={link}>{friend.username}</Link>
        </div>
    )
}

export default Friend