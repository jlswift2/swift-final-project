import React from 'react'

function IngredientsForm({ ingredients, handleIngredientChange, handleIngredientAdd, handleIngredientRemove }) {

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
        <div>
            <label htmlFor="ingredients">Enter Ingredients:</label>
            {ingredients.map((singleIngredient, index) => (
                <div key={index}>
                    <input
                        className="font-serif w-1/5 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                        type="text"
                        name="quantity"
                        value={singleIngredient.quantity}
                        onChange={(e) => onIngredientChange(e, index)}
                        required
                    />
                    <select className="font-serif w-1/5 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" name="measurement" onChange={(e) => onIngredientChange(e, index)}>
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
                        className="font-serif w-1/2 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                        type="text"
                        name="ingredient"
                        value={singleIngredient.ingredient}
                        onChange={(e) => onIngredientChange(e, index)}
                        required
                    />
                    {ingredients.length > 1 &&
                        <button type="button" className="font-serif w-1/8 text-center py-1 px-2 font-bold text-3xl text-red-200 hover:text-red-500 transition duration-300 ease-in-out" onClick={() => handleRemove(index)}>
                            <span>-</span>
                        </button>
                    }
                    {ingredients.length - 1 === index &&
                    (
                        <div className="flex">
                            <button type="button" className="m-auto font-serif w-1/6 text-center py-1 px-2 bg-green-200 rounded-full text-base hover:bg-green-400 transition duration-300 ease-in-out" onClick={handleAdd}>
                                <span>+</span>
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    // ))}
    )
}

export default IngredientsForm