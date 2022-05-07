import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import IngredientsForm from '../components/IngredientsForm';
import NewRecipeForm from '../components/NewRecipeForm';
import Steps from '../components/Steps';
import TagsForm from '../components/TagsForm';

function NewRecipe({ user }) {
    const [formData, setFormData] = useState({});
    const [recipeImg, setRecipeImg] = useState({})
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

    function handleImgChange(e) {
        setRecipeImg({[e.target.name]: e.target.value})
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
    }

    function handleIngredientAdd() {
        setIngredients([...ingredients, {ingredient: "Enter Ingredient", quantity: "1", measurement: "LB"}])
    }

    function handleIngredientRemove(index) {
        const newIngredients= [...ingredients]
        newIngredients.splice(index, 1)
        setIngredients(newIngredients)
    }

    function handleTagChange(e, index) {
        const newTags = [...tags]
        newTags[index] = e.target.value
        setTags(newTags) 
    }

    function handleTagAdd() {
        setTags([...tags, "Add New Tag"])
    }

    function handleTagRemove(index) {
        const newTags = [...tags]
        newTags.splice(index, 1)
        setTags(newTags)
    }

    function onSubmit(e) {
        e.preventDefault();

        let newform = {...formData}
        newform["ingredients"] = ingredients
        newform["steps"] = steps
        newform["tags"] = tags
  
        fetch('/recipes/new',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newform),
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
    }

    return(
        <div className='w-full max-w-xl m-auto mt-10 bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16 font-serif'>
            <NewRecipeForm 
                formData={formData}
                handleFormChange={handleFormChange}
                handleImgChange={handleImgChange}
            />
            <IngredientsForm
                ingredients={ingredients}
                handleIngredientChange={handleIngredientChange}
                handleIngredientAdd={handleIngredientAdd}
                handleIngredientRemove={handleIngredientRemove}
            />
            <Steps
                steps={steps}
                handleStepChange={handleStepChange}
                handleStepAdd={handleStepAdd}
                handleStepRemove={handleStepRemove}
            />
            <TagsForm
                tags={tags}
                handleTagChange={handleTagChange}
                handleTagAdd={handleTagAdd}
                handleTagRemove={handleTagRemove}
            />
            <button type="submit" className="m-auto font-serif w-full text-center py-1 px-2 mt-6 bg-green-200 rounded-full text-base hover:bg-green-400 transition duration-300 ease-in-out" onClick={onSubmit}>Submit</button>
        </div>
    )
}
export default NewRecipe


// send all data - image in json fetch
//     send back recipe data
//     .then or async await   
//         send img as FormData ***make sure img not required on backend