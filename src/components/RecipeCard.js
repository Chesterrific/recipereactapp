import React from 'react'

const RecipeCard = ({recipe}) => {
  return (
    <div className='recipe-card'>
      <h1>{recipe.recipe.label}</h1>
      <img src={recipe.recipe.image} alt={recipe.recipe.label}></img>
    </div>
  )
}

export default RecipeCard
