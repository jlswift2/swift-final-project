import React from 'react'

function RecipeCard({ recipe }) {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <h4>{recipe.description}</h4>
      <h6>{recipe.tags}</h6>
    </div>
  )
}

export default RecipeCard