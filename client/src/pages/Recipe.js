import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {
    const {recipeId} = useParams()
    console.log(recipeId)
    const [recipe, setRecipe] = useState(null)
    let tags = recipe.tags.map(tag => {
      return(tag.title)
    })
    
    let steps = recipe.steps.map(step => {
        return(<p>{step}</p>)
    }) 

    useEffect(() =>{
        fetch(`/recipes/${recipeId}`)
        .then(resp => resp.json())
        .then(data => setRecipe(data))
    }, [])
  
    return (
    <div>
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