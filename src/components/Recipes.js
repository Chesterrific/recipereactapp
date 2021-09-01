import React from 'react'
import RecipeCard from './RecipeCard'

const Recipe = ({ recipes }) => {
  return (
    <section className='recipes'>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.recipe.calories}
          recipe={recipe}
        ></RecipeCard>
      ))}
    </section>
  )
}

export default Recipe
