import React, { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard';
import { useNavigate } from 'react-router-dom';

function RBRecipes( {user, query} ) {
  const [recipes, setRecipes] = useState([])
  const navigate = useNavigate()

  useEffect( () => {
    if (user) {
      fetch(`/user/${user.id}/recipes/all`)
      .then(resp => resp.json())
      .then(data => setRecipes(data))
    }
  }, [user])

  const tagCollection = recipes.map(recipe => {
    return recipe.tags.map(tag => {
      return tag.title
    })
  })

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
      <h2>Recipes</h2>
      <button onClick={() => navigate("/recipes/new")} >New Recipe</button>
      {displayRecipes}
    </div>
  )
}

export default RBRecipes