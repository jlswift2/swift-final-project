import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function NewRecipeForm({ handleFormChange, formData, steps, handleStepChange, handleStepAdd, handleStepRemove }) {
    // const [formData, setFormData] = useState({});
    // const [steps, setSteps] = useState(["start here"])
    let navigate = useNavigate()

    // function handleFormChange (e) {
    //     if (e.target.name === "recipe_image") {
    //         setFormData({
    //             ...formData,
    //             [e.target.name]: e.target.files[0] 
    //         })
    //     } else { 
    //         setFormData({
    //             ...formData,
    //             [e.target.name]: e.target.value
    //         })};
    // }

    function onChange (e) {
        handleFormChange(e)
    }

    function onStepChange (e, index) {
        handleStepChange(e, index)
    }

    // function handleStepChange (e, index) {
    //     const newSteps = [...steps]
    //     newSteps[index] = e.target.value
    //     setSteps(newSteps)
    //     console.log(newSteps)      
    // }

    function handleAdd () {
        handleStepAdd()
    }

    function handleRemove (index) {
        handleStepRemove(index)
    }

    return (
        <div>
            <h1>Signup Form</h1>
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
                <label htmlFor="steps">Enter Steps:</label>
                {steps.map((value, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="step"
                            value={value}
                            onChange={(e) => onStepChange(e, index)}
                            required
                        />
                        {steps.length - 1 === index &&
                        (
                            <button type="button" onClick={handleAdd}>
                                <span>Add a Step</span>
                            </button>
                        )}
                        {steps.length > 1 &&
                        (
                            <button type="button" onClick={() => handleRemove(index)}>
                                <span>Remove</span>
                            </button>
                        )}
                    </div>
                ))}
            </form>
        </div>
    )
}

export default NewRecipeForm