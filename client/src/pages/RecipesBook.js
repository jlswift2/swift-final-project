import React, { useState } from 'react'
import RBRecipes from '../components/RBRecipes'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

function RecipesBook({ user }) {
  const [query, setQuery] = useState("")
  
  return (
    <div>
      <h1>RecipesPage</h1>
      <Link to="/land">Return to your landing page</Link>
      <SearchBar setQuery={setQuery} />
      <RBRecipes user={user} query={query}/>
    </div>
  )
}

export default RecipesBook