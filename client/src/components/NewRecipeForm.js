import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function NewRecipeForm({ handleFormChange, formData }) {
    let navigate = useNavigate()

    function onChange (e) {
        handleFormChange(e)
    }

    return (
        <div>
            <h1>New Recipe</h1>
            <form>
                <label htmlFor="name">Recipe Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                />
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={onChange}
                />
                <label htmlFor="prep_time">Prep Time (in minutes):</label>
                <input
                    type="number"
                    min="0"
                    name="prep_time"
                    value={formData.prep_time}
                    onChange={onChange}
                />
                <label htmlFor="total_time">Total Time (in minutes):</label>
                <input
                    type="number"
                    min="0"
                    name="total_time"
                    value={formData.total_time}
                    onChange={onChange}
                />
                <label htmlFor="recipe_image">Recipe Image:</label>
                <input 
                    type="file" 
                    name="recipe_image"
                    accept="image/png, image/jpeg" 
                    onChange={onChange} 
                />
            </form>
        </div>
    )
}

export default NewRecipeForm