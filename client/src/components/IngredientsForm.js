import React from 'react'

function IngredientsForm({ ingredients, handleIngredientChange, handleIngredientAdd, handleIngredientRemove }) {
    console.log(ingredients)

    function onIngredientChange(e, index) {
        handleIngredientChange(e, index)
    }

    function handleAdd() {
        handleIngredientAdd()
    }

    function handleRemove(index) {
        handleIngredientRemove(index)
    }

    return (
        <div>LOL
            <label htmlFor="ingredients">Enter Ingredients:</label>
            {ingredients.map((singleIngredient, index) => (
                <div key={index}>
                    <input
                        type="text"
                        name="quantity"
                        value={singleIngredient.quantity}
                        onChange={(e) => onIngredientChange(e, index)}
                        required
                    />
                    <select name="measurement" onChange={(e) => onIngredientChange(e, index)}>
                        <option value="TSP">TSP</option>
                        <option value="TBSP">TBSP</option>
                        <option value="FL OZ">FL OZ</option>
                        <option value="CUP">CUP</option>
                        <option value="PINT">PINT</option>
                        <option value="QUART">QUART</option>
                        <option value="GALLON">GALLON</option>
                        <option value="ML">ML</option>
                        <option value="L">L</option>
                        <option value="G">G</option>
                        <option value="KG">KG</option>
                        <option value="OZ">OZ</option>
                        <option value="LB">LB</option>
                        <option value="SMALL">SMALL</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="LARGE">LARGE</option>
                        <option value=""></option>
                    </select>
                    <input
                        type="text"
                        name="ingredient"
                        value={singleIngredient.ingredient}
                        onChange={(e) => onIngredientChange(e, index)}
                        required
                    />
                    {ingredients.length - 1 === index &&
                    (
                        <button type="button" onClick={handleAdd}>
                            <span>Add an Ingredient</span>
                        </button>
                    )}
                    {ingredients.length > 1 &&
                        <button type="button" onClick={() => handleRemove(index)}>
                            <span>Remove</span>
                        </button>
                    }
                </div>
            ))}
        </div>
    // ))}
    )
}

export default IngredientsForm