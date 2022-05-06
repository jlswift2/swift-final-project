import React from 'react'


function SearchBar({ setQuery }) {
  return (
    <div>
      <input placeholder="Enter Recipe Name or Tag" onChange={e => setQuery(e.target.value)} />
    </div>
  )
}

export default SearchBar