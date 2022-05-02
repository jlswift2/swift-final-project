import React from 'react'

function Greeting({ user }) {
    
    
    return (
        <div>
            {user ? <h2>Welcome, {user.username}</h2> : <h2>Welcome</h2>}
        </div>
  )
}

export default Greeting