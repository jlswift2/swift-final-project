import React, { useState } from 'react'
import FriendRBRecipes from '../components/FriendRBRecipes'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

function FriendRBPage({ user }) {
  const [query, setQuery] = useState("")
  const [friend, setFriend] = useState({})

  return (
    <div className="mt-10">
      <Link className="text-gray-800" to="/land">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Return to your landing page
      </Link>
      <h2 className="font-serif mt-4 mb-6 text-xl md:text-4xl uppercase font-bold flex justify-center">{friend.username}'s Recipe Book</h2>
      <SearchBar setQuery={setQuery} />
      <FriendRBRecipes user={user} query={query} setFriend={setFriend} />
    </div>
  )
}

export default FriendRBPage