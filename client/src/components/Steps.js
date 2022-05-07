import React from 'react'

function Steps({ steps, handleStepChange, handleStepAdd, handleStepRemove }) {
    
    function onStepChange (e, index) {
        handleStepChange(e, index)
    }

    function handleAdd () {
        handleStepAdd()
    }

    function handleRemove (index) {
        handleStepRemove(index)
    }
    return (
        <div className="mt-2">
            <label htmlFor="steps">Enter Steps:</label>
            {steps.map((value, index) => (
                <div key={index}>
                    <input
                        className="font-serif w-5/6 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                        type="text"
                        name="step"
                        value={value}
                        onChange={(e) => onStepChange(e, index)}
                        required
                    />
                    {steps.length > 1 &&
                    (
                        <button className="font-serif w-1/8 text-center px-2 font-bold text-3xl text-red-200 hover:text-red-500 transition duration-300 ease-in-out" type="button" onClick={() => handleRemove(index)}>
                            <span>-</span>
                        </button>
                    )}
                    {steps.length - 1 === index &&
                    (
                        <div className="flex">
                            <button type="button" className="m-auto font-serif w-1/6 text-center py-1 px-2 bg-green-200 rounded-full text-base hover:bg-green-400 transition duration-300 ease-in-out"  onClick={handleAdd}>
                                <span>+</span>
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Steps