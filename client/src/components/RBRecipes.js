import React, { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard';

function RBRecipes( {user} ) {
  const [recipes, setRecipes] = useState([])
  useEffect( () => {
    if (user) {
      fetch(`/user/${user.id}/recipes/all`)
      .then(resp => resp.json())
      .then(data => setRecipes(data))
    }
  }, [user])

  const displayRecipes = recipes.map(recipe => {
    return(<RecipeCard key={recipe.id} recipe={recipe}/>)})

  return (
    <div>
      <h2>Recipes</h2>
      {displayRecipes}
    </div>
  )
}

export default RBRecipes