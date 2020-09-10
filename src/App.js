import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const APP_ID = "a64f42dc";
  const APP_KEY = "5dad59414b4b2d6cdbe30e0560f91824";

  useEffect(() => {
    getRecipies();
  }, []);

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <form className='search-form'>
        <input className="search-bar" type='text'></input>
        <button className="search-button" type='submit'>
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
