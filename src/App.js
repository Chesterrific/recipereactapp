import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import './App.css';

function App() {

  const APP_ID = "a64f42dc";
  const APP_KEY = "5dad59414b4b2d6cdbe30e0560f91824";

  const [recipes, setRecipies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  // Runs everytime the DOM is updated, [] at the end will make it run only when that element changes.
  useEffect(() => {
    getRecipies();
  }, [query]);

  // Async function that waits for the api to answer back.
  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)

    // Sets data into json format.
    const data = await response.json();

    // Updates recipes state with new values.
    setRecipies(data.hits);
  }

  const updateSearch = e => {
    //Value of input element
    setSearch(e.target.value);
  }

  const getSearch = e => {
    // prevents page reload on submit.
    e.preventDefault();
    
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input
          className="search-bar"
          type='text' value={search}
          onChange={updateSearch}
        />
        <button
          className="search-button"
          type='submit'
        >
          Search
        </button>
      </form>
      {/* Map function applies the given function onto each element in the array. 'recipe' in this case is the current item being iterated upon. */}
      {recipes.map(recipe => (
        // Passing props into recipe
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))};
    </div>
  );
}

export default App;