import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import RecipeCard from './RecipeCard';

function LPRecipes( {user} ) {
  const [recipes, setRecipes] = useState([])
  const navigate = useNavigate()

  useEffect( () => {
    if (user) {
      fetch(`/user/${user.id}/recipes`)
      .then(resp => resp.json())
      .then(data => setRecipes(data))
    }
  }, [user])

  const displayRecipes = recipes.map(recipe => {
    return(<RecipeCard key={recipe.id} recipe={recipe}/>)})

  return (
    <div>
      <h2>Recipes</h2>
      <button onClick={() => navigate("/recipes/new")} >New Recipe</button>
      {displayRecipes}
    </div>
  )
}

export default LPRecipes