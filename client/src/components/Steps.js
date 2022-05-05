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
        <div>
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
        </div>
    )
}

export default Steps