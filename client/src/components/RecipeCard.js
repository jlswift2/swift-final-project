import React from 'react'
import { useNavigate } from 'react-router-dom'


function RecipeCard({ recipe }) {
  let navigate = useNavigate()
  let tags = recipe.tags.map(tag => {
    return(
      <span key={tag.id} className="text-xs float-right font-semibold  py-1 px-2 uppercase rounded text-violet-600 bg-violet-200 last:ml-0 ml-1">
        {tag.title}
      </span>
    )
  })

  function handleClick() {
    navigate(`/recipes/${recipe.id}`)
  }

  return (
    <div className="flex flex-col justify-between p-8 transition-shadow bg-white rounded overflow-hidden shadow-gray-600 shadow-xl group hover:shadow-lg" onClick={handleClick}>
      <div>
        <h3 className="font-serif text-xl font-bold text-center">{recipe.name}</h3>
        <div class="border-t-2 border-indigo-100">
          <h4 className="font-serif mt-4 italic text-lg justify-left">{recipe.description}</h4>
        </div>
      </div>
      <div class="inline-flex items-center mt-16 text-indigo-600 justify-end">
        <p class="text-lg font-medium">{tags}</p>
      </div>
    </div>
  )
}

export default RecipeCard