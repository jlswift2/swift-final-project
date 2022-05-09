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
      <h2 className="font-serif mb-6 text-xl md:text-4xl uppercase font-bold flex justify-center">Recipes</h2>
      <button className="text-green-600 pl-10" onClick={() => navigate("/recipes/new")}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        New Recipe
      </button>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 justify-center">
        {displayRecipes}
      </div>
    </div>
  )
}

export default LPRecipes