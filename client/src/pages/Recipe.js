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
      return(tag.title)
    })} else {
      tags = "loading"
    }
    
    let steps
    if(recipe) {
      steps = recipe.steps.map(step => {
          return(<p>{step}</p>)
      })} else {
        steps = "loading"
    }

    return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h3>{recipe ? recipe.name : "loading"}</h3>
      <h4>{recipe ? recipe.description : "loading"}</h4>
      <h4>{recipe ? recipe.prep_time : "loading"}</h4>
      <h4>{recipe ? recipe.total_time : "loading"}</h4>
      {steps}
      <h5>{tags}</h5>
    </div>
  )
}

export default Recipe