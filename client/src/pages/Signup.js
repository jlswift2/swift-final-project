import React from 'react'
import SignupForm from '../components/SignupForm'

function Signup({ handleLogin }) {
  return (
    <div>
        <SignupForm handleLogin={handleLogin} />
    </div>
  )
}

export default Signup