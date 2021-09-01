import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Form from './components/Form';
import Recipes from './components/Recipes';

function App() {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes()
  }, [query])
  
  const getRecipes = async () => {
    if (isLoading) {
      // Skips initial search for blank query
      setIsLoading(false)
    } else {
      const res = await axios(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`)
      setRecipes(res.data.hits)
      console.log(res.data.hits)
    }
  }

  return (
    <div className="App">
      <Form
        getQuery={(q) => { setQuery(q) }}
      ></Form>
      <Recipes
        recipes={recipes}
      ></Recipes>
    </div>
  );
}

export default App;
