import React from 'react'
import { useNavigate } from 'react-router-dom'


function RecipeCard({ recipe }) {
  let navigate = useNavigate()
  let tags = recipe.tags.map(tag => {
    return(tag.title)
  })

  function handleClick() {
    navigate(`/recipes/${recipe.id}`)
  }

  return (
    <div onClick={handleClick}>
      <h3>{recipe.name}</h3>
      <h4>{recipe.description}</h4>
      <h6>{tags}</h6>
    </div>
  )
}

export default RecipeCard