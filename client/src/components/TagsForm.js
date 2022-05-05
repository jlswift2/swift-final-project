import React from 'react'

function TagsForm({ tags, handleTagChange, handleTagAdd, handleTagRemove}) {
    
    function onChange (e, index) {
        handleTagChange(e, index)
    }

    function handleAdd () {
        handleTagAdd()
    }

    function handleRemove (index) {
        handleTagRemove(index)
    }

    return (
        <div>
            Tags Form
            <form>
                {tags.map((value, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="tag"
                            value={value}
                            onChange={(e) => onChange(e, index)}
                            required
                        />
                        {tags.length - 1 === index &&
                        (
                            <button type="button" onClick={handleAdd}>
                                <span>Add a Tag</span>
                            </button>
                        )}
                        {tags.length > 1 &&
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

export default TagsForm