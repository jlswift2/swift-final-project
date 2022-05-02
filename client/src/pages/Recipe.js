import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Recipe() {
    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState(null)
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

    useEffect(() =>{
        fetch(`/recipes/${recipeId}`)
        .then(resp => resp.json())
        .then(data => setRecipe(data))
    }, [])

  
    return (
    <div>
      <Link to="/recipes">Return to your recipe book</Link>
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