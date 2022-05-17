import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

function FriendRBRecipes({ user }) {
    const [recipes, setRecipes] = useState(null)
    const [friend, setFriend] = useState({})
    const { friendId } = useParams()

    useEffect( () => {
        fetch(`/friends/${friendId}`)
        .then(resp => resp.json())
        .then(data => {
            setRecipes(data.recipes)
            setFriend(data)
        })
        // if (user) {
        //     fetch(`/friends/${friendId}`)
        //     .then(resp => resp.json())
        //     .then(data => {
        //         console.log(data)
        //         // setRecipes(data.recipes)
        //         setFriend(data)
        //     })
        // }
    }, [friendId])

    return (
    <div>
        <h2>{friend.username}'s Recipes</h2>
        {recipes ? recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />) : "loading now..."}
    </div>
    )
}

export default FriendRBRecipes