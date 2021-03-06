import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Recipe() {
    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState(null)
    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    useEffect(() =>{
      fetch(`/recipes/${recipeId}`)
      .then(resp => resp.json())
      .then(data => setRecipe(data))
    }, [recipeId])

    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        } else {
          console.log('oop!')
        }
      });
    }, [])
    
    let tags
    if (recipe) {
      tags = recipe.tags.map(tag => {
      return(<span key={tag.id} className="text-xs font-semibold inline-block py-1 px-2 mx-2 uppercase rounded text-violet-600 bg-violet-200 last:ml-0 ml-1">{tag.title}</span>)
    })} else {
      tags = "loading"
    }
    
    let steps
    if(recipe) {
      steps = recipe.steps.map(step => {
          return(<li className="my-1" key={step}>{step}</li>)
      })} else {
        steps = "loading"
    }

    let ingredients 
    if(recipe) {
      ingredients=recipe.recipe_ingredients.map(ing => {
        return(<li key={ing.id}>{ing.quantity} {ing.measurement ? ing.measurement : null} {ing.ingredient.name}</li>)
      })} else {
        ingredients = "loading"
    }

    let buttons
    if(user) {
      if(recipe.user_id === user.id) {
        buttons = (      
          <div className="w-1/2 m-auto text-center mt-12">
            <button type="button" className="text-white rounded-lg bg-blue-300 mx-5 px-2 py-1" onClick={handleEdit}>Edit Recipe</button>
            <button type="button" className="text-white rounded-lg bg-red-500 mx-5 px-2 py-1" onClick={handleDelete}>Delete Recipe</button>
          </div>
        )
      } else {
        buttons = null
      }
    }

    console.log(recipe)
    console.log(user)

    function handleDelete(e) {
      fetch(`${recipe.id}`, {
        method: "DELETE",
      })
      .then((r) => r.json())
      .then((data) => navigate("/land"))
    }

    function handleEdit(e) {
      navigate(`edit`)
    }
    
    return (
    <div className="mt-10">
      <div>
        <button className="text-gray-800" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Return to your recipe book
        </button>
      </div>

      <h1 className='font-serif text-4xl font-bold text-primary mt-4 mb-6 text-center'>{recipe ? recipe.name : "loading"}</h1>
      <div className="italic w-1/2 m-auto text-center">{recipe ? recipe.description : "loading"}</div>
      <div className="w-1/2 m-auto text-center my-3">
        {tags}
      </div>
      <div className="w-1/2 m-auto text-center my-6">
        <h4>{recipe ? `prep time: ${recipe.prep_time} minutes` : "loading"}</h4>
        <h4>{recipe ? `total time: ${recipe.total_time} minutes` : "loading"}</h4>
      </div>
      <div className="flex justify-center">
        <div className='w-1/3 bg-white rounded-lg border border-primaryBorder shadow-default py-5 mx-8 font-serif'>
          <h3 className="pb-5 text-center">Ingredients</h3>
          <ul className="list-inside list-disc px-16">
            {ingredients}
          </ul>
        </div>
        <div className='w-1/2 float-right bg-white rounded-lg border border-primaryBorder shadow-default py-5 font-serif'>
          <h3 className="pb-5 text-center">Steps</h3>
          <ul className="list-inside list-decimal px-16">
            {steps}
          </ul>
        </div>

      </div>
      {buttons}
    </div>
  )
}

export default Recipe