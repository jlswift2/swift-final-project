import React from 'react'
import SignupForm from '../components/SignupForm'
import { useNavigate } from 'react-router-dom'

function Signup({ handleLogin }) {
  const navigate = useNavigate()

  let loginButton = (
    <div className="flex">
      <button className="m-auto mt-2 font-serif text-center py-2 px-4 bg-stone-200 rounded-full text-base hover:bg-stone-400 transition duration-300 ease-in-out flex items-center" onClick={() => navigate('/login')}>Already have an account? Log in</button>
    </div>
)
  
  return (
    <div className='w-full max-w-xl m-auto absolute top-[10%] left-[25%] bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16 font-serif'>
        <SignupForm handleLogin={handleLogin} />
        {loginButton}
    </div>
  )
}

export default Signup