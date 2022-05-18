import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

function FriendRBRecipes({ user, query, setFriend }) {
    const [recipes, setRecipes] = useState([])
    const { friendId } = useParams()

    useEffect( () => {
        fetch(`/friends/${friendId}`)
        .then(resp => resp.json())
        .then(data => {
            setRecipes(data.recipes)
            setFriend(data)
        })
    }, [friendId, setFriend])

    const filteredRecipes = recipes.filter(recipe => {
        if (recipe.name === "") {
          return recipe;
        } else if (recipe.name.toLowerCase().includes(query.toLowerCase())) {
          return recipe;
        } else if (recipe.tags.find(tag => tag.title.toLowerCase().includes(query.toLowerCase()))) {
          return recipe;
        }
      })
    
    const displayRecipes = filteredRecipes.map(recipe => {
        return(<RecipeCard key={recipe.id} recipe={recipe} />)})
    
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-center">
            {displayRecipes}
        </div>
    )
}

export default FriendRBRecipes