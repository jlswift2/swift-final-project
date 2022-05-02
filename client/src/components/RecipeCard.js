import React from 'react'

function RecipeCard({ recipe }) {
  
  let tags = recipe.tags.map(tag => {
    return(tag.title)
  })

  return (
    <div>
      <h3>{recipe.name}</h3>
      <h4>{recipe.description}</h4>
      <h6>{tags}</h6>
    </div>
  )
}

export default RecipeCard