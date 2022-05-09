import React from 'react'


function SearchBar({ setQuery }) {
  return (
    <span className="pl-10">
      <input className="font-serif content-right w-1/3 p-2 align-right text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" placeholder="Enter Recipe Name or Tag" onChange={e => setQuery(e.target.value)} />
    </span>
  )
}

export default SearchBar