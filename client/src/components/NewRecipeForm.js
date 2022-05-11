import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function NewRecipeForm({ handleFormChange, formData, handleImgChange, isEdit }) {

    function onChange (e) {
        handleFormChange(e)
    }

    return (
        <div>
            <h1 className='font-serif text-4xl font-bold text-primary mt-4 mb-12 text-center'>{isEdit === true ? "Edit Recipe" : "New Recipe"}</h1>
            <form>
                <label htmlFor="name">Recipe Name:</label>
                <input
                    className="font-serif w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                />
                <label htmlFor="description">Description:</label>
                <input
                    className="font-serif w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={onChange}
                />
                <label htmlFor="prep_time">Prep Time (in minutes):</label>
                <input
                    className="font-serif w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    type="number"
                    min="0"
                    name="prep_time"
                    value={formData.prep_time}
                    onChange={onChange}
                />
                <label htmlFor="total_time">Total Time (in minutes):</label>
                <input
                    className="font-serif w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    type="number"
                    min="0"
                    name="total_time"
                    value={formData.total_time}
                    onChange={onChange}
                />
                {/* <label htmlFor="recipe_image">Recipe Image:</label> */}
                {/* <input 
                    className="font-serif w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    type="file" 
                    name="recipe_image"
                    accept="image/png, image/jpeg" 
                    onChange={handleImgChange} 
                /> */}
            </form>
        </div>
    )
}

export default NewRecipeForm