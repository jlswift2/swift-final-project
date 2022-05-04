import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NewRecipeForm from '../components/NewRecipeForm';

function NewRecipe({ user }) {
    const [formData, setFormData] = useState({});
    const [steps, setSteps] = useState(["start here"])

    function handleFormChange (e) {
        if (e.target.name === "recipe_image") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0] 
            })
        } else { 
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        };
    }

    function handleStepChange (e, index) {
        const newSteps = [...steps]
        newSteps[index] = e.target.value
        setSteps(newSteps)     
    }

    function handleStepAdd() {
        setSteps([...steps, "Add New Step"])
    }

    function handleStepRemove(index) {
        const newSteps = [...steps]
        newSteps.splice(index, 1)
        setSteps(newSteps)
    }

    function onSubmit() {
        console.log("submit")
    }

    return(
        <div>
            <NewRecipeForm 
                formData={formData}
                steps={steps} 
                handleFormChange={handleFormChange}
                handleStepChange={handleStepChange}
                handleStepAdd={handleStepAdd}
                handleStepRemove={handleStepRemove} 
            />
            <button type="submit">Submit</button>
        </div>
    )
}
export default NewRecipe