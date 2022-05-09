import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Recipe() {
    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState(null)
    const navigate = useNavigate();

    useEffect(() =>{
      fetch(`/recipes/${recipeId}`)
      .then(resp => resp.json())
      .then(data => setRecipe(data))
    }, [recipeId])
    
    let tags
    if (recipe) {
      tags = recipe.tags.map(tag => {
      return(<span key={tag.id}>{tag.title}</span>)
    })} else {
      tags = "loading"
    }
    
    let steps
    let count = 0
    if(recipe) {
      steps = recipe.steps.map(step => {
          count += 1
          return(<p key={step}>Step {count}: {step}</p>)
      })} else {
        steps = "loading"
    }

    let ingredients 
    if(recipe) {
      ingredients=recipe.recipe_ingredients.map(ing => {
        return(<p key={ing.id}>{ing.quantity} {ing.measurement ? ing.measurement : null} {ing.ingredient.name}</p>)
      })} else {
        ingredients = "loading"
      }

    console.log(ingredients)



    return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h3>{recipe ? recipe.name : "loading"}</h3>
      <h4>{recipe ? recipe.description : "loading"}</h4>
      <h4>{recipe ? recipe.prep_time : "loading"}</h4>
      <h4>{recipe ? recipe.total_time : "loading"}</h4>
      {steps}
      {ingredients}
      <h5>{tags}</h5>
    </div>
  )
}

export default Recipe