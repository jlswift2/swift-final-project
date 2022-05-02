import React from 'react'
import { Outlet } from 'react-router-dom'
import Recipe from './Recipe'

function RecipesBook() {
  return (
    <div>
      RecipesPage
      <Recipe />
    </div>
  )
}

export default RecipesBook