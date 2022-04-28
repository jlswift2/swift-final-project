import React from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router-dom'

function Login({ handleLogin }) {
    const navigate = useNavigate()
  
  let signupButton = <button onClick={() => navigate('/signup')}>Signup</button>
    return (
        <div>
            <LoginForm handleLogin={handleLogin} />
            {signupButton}
        </div>
    )
}

export default Login