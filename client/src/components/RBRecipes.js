import React, { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard';
import { useNavigate } from 'react-router-dom';

function RBRecipes( {user, query} ) {
  const [recipes, setRecipes] = useState([])

  useEffect( () => {
    if (user) {
      fetch(`/user/${user.id}/recipes/all`)
      .then(resp => resp.json())
      .then(data => setRecipes(data))
    }
  }, [user])

  const filteredRecipes = recipes.filter(recipe => {
    if (recipe.name === "") {
      return recipe;
    } else if (recipe.name.toLowerCase().includes(query.toLowerCase())) {
      return recipe;
    } else if (recipe.tags.find(tag => tag.title.toLowerCase().includes(query.toLowerCase()))) {
      return recipe;
    }
  })

  const displayRecipes = filteredRecipes.map(recipe => {
    return(<RecipeCard key={recipe.id} recipe={recipe} />)})

  return (
    <div>
      {displayRecipes}
    </div>
  )
}

export default RBRecipes