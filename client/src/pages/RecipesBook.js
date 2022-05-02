import React from 'react'
import RBRecipes from '../components/RBRecipes'
import { Link } from 'react-router-dom'

function RecipesBook({ user }) {
  return (
    <div>
      <h1>RecipesPage</h1>
      <Link to="/land">Return to your landing page</Link>
      <RBRecipes user={user}/>
    </div>
  )
}

export default RecipesBook