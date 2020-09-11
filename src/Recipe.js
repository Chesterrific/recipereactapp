import React from 'react';

// Giving "props" as a reference allows us to access props passed into Recipe
function Recipe(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <ol>
        {props.ingredients.map(ingredient =>(
          <li>
            {ingredient.text}
          </li>
        ))}
      </ol>
      <p>Calories: {props.calories}</p>
      <img src={props.image} alt={props.title}></img>
    </div>
  );
}

export default Recipe;