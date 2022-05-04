import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import IngredientsForm from '../components/IngredientsForm';
import NewRecipeForm from '../components/NewRecipeForm';

function NewRecipe({ user }) {
    const [formData, setFormData] = useState({});
    const [steps, setSteps] = useState(["start here"])
    const [ingredients, setIngredients] = useState([{ingredient: "Enter Ingredient", quantity: "1", measurement: "LB"}])
    const [tags, setTags] = useState(["Enter tags here"])
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

    function handleIngredientChange(e, index) {
        const {name, value} = e.target
        const newIngredients = [...ingredients]
        newIngredients[index][name] = value
        setIngredients(newIngredients)
        console.log(newIngredients)
    }

    function handleIngredientAdd() {
        setIngredients([...ingredients, {ingredient: "Enter Ingredient", quantity: "1", measurement: "LB"}])
    }

    function handleIngredientRemove(index) {
        const newIngredients= [...ingredients]
        newIngredients.splice(index, 1)
        setIngredients(newIngredients)
    }

    function onSubmit() {
        console.log("LOOL")
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
            <IngredientsForm
                ingredients={ingredients}
                handleIngredientChange={handleIngredientChange}
                handleIngredientAdd={handleIngredientAdd}
                handleIngredientRemove={handleIngredientRemove}
            />
            <button type="submit">Submit</button>
        </div>
    )
}
export default NewRecipe