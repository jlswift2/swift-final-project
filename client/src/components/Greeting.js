import React from 'react'

function Greeting({ user }) {
    
    
    return (
        <div className='font-serif italic text-4xl pt-5 pb-5 bg-slate-400 font-bold text-primary mt-4 mb-12 text-right'>
            {user ? <h2 className='pr-8'>Welcome, {user.username}</h2> : <h2 className='pr-5'>Welcome</h2>}
        </div>
  )
}

export default Greeting