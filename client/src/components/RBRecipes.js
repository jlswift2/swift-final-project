import React, { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard';
import { useNavigate } from 'react-router-dom';

function RBRecipes( {user} ) {
  const [recipes, setRecipes] = useState([])
  const navigate = useNavigate()

  useEffect( () => {
    if (user) {
      fetch(`/user/${user.id}/recipes/all`)
      .then(resp => resp.json())
      .then(data => setRecipes(data))
    }
  }, [user])

  const displayRecipes = recipes.map(recipe => {
    return(<RecipeCard key={recipe.id} recipe={recipe} />)})

  return (
    <div>
      <h2>Recipes</h2>
      <button onClick={() => navigate("/recipes/new")} >New Recipe</button>
      {displayRecipes}
    </div>
  )
}

export default RBRecipes