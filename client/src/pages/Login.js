import React from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router-dom'

function Login({ handleLogin }) {
    const navigate = useNavigate()
  
  let signupButton = (
      <div className="flex">
        <button className="m-auto mt-2 font-serif text-center py-2 px-4 bg-stone-200 rounded-full text-base hover:bg-stone-400 transition duration-300 ease-in-out flex items-center" onClick={() => navigate('/signup')}>Don't have an account? Sign up</button>
      </div>
  )
      return (
        <div className='w-full max-w-xl m-auto absolute top-[25%] left-[25%] bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16 font-serif'>
            <LoginForm handleLogin={handleLogin} />
            {signupButton}
        </div>
    )
}

export default Login