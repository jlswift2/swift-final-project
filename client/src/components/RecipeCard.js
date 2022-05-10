import React from 'react'
import { useNavigate } from 'react-router-dom'


function RecipeCard({ recipe }) {
  let navigate = useNavigate()
  let tags = recipe.tags.map(tag => {
    return(
      <span key={tag.id} className="text-xs float-right font-semibold inline-block py-1 px-2 uppercase rounded text-violet-600 bg-violet-200 last:ml-0 ml-1">
        {tag.title}
      </span>
    )
  })

  function handleClick() {
    navigate(`/recipes/${recipe.id}`)
  }

  return (
    <div className="rounded overflow-hidden shadow-md shadow-gray-600" onClick={handleClick}>
      <h3 className="font-serif mb-6 text-xl md:text-xl font-bold flex justify-center">{recipe.name}</h3>
      <h4 className="font-serif italic text-lg flex justify-left">{recipe.description}</h4>
      <div>
        {tags}
      </div>
    </div>
  )
}

export default RecipeCard