import React, { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard';

function Recipes( {user} ) {
  const [recipes, setRecipes] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     setHasError(false);
  //     try {
  //       const res = await fetch(`/recipes/${user.id}`,
  //       );
  //       const json = await res.json()
  //       setRecipes(json.hits);
  //     } catch (error) {
  //       setHasError(true)
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [setRecipes]);

  useEffect( () => {
    if (user) {
      fetch(`/recipes/${user.id}`)
      .then(resp => resp.json())
      .then(data => setRecipes(data))
    }
  }, [user])

  const displayRecipes = recipes.map(recipe => {
    return(<RecipeCard recipe={recipe}/>)})

  return (
    <div>
      <h2>Recipes</h2>
      {displayRecipes}
    </div>
  )
}

export default Recipes