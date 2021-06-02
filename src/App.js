//Importing app keys
import "./key";
import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTiles from "./RecipeTiles";






function App() {
  //query is a constant, we can change the value only by calling setquery
  //This is a hook
  //Used to render updated value in frontEnd
  const [query, setquery] = useState("");

  //Hook for recipies, values will be stored in an array
  const [recipes, setrecipes] = useState([]);

  //Creating a hook for user preference
  const [healthLabel, sethealthLabel] = useState("vegan");


  const YOUR_APP_ID = "f41f35da";
  const YOUR_APP_KEY = "01dd4dc0e090ad63d4c85847928e22e2"; 
  //Api url for recipies
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  
  //Function to get recipies online
  async function getRecipes(){
    //There are some functions which take time to bring values
    //So it wont return null
    
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  }


  //This function will work instead of default reload when search button is clicked
  const submit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  
  return (
      <div className="app">
        <h1 onClick = {getRecipes}>Food Recipes</h1>
        {/* Creating a form to search recipes */}
        <form className = "app_searchform" onSubmit = {submit}>
          {/* data type is text and user have to type an ingredient */}
          <input 
            type = "text" 
            className="app_input"
            placeholder = "Enter ingredient" 
            value= {query} 
            onChange = {(e) => setquery (e.target.value)}
          />

          {/* A button to submit search item */}
          <input className= "app_submit" type= "submit" value="Search"/> 

          <select className="app_healthLabels">
            <option 
              value="vegan"
              onClick = {() => sethealthLabel("vegan")}>Vegan</option>
            <option
              value="vegetarian"
              nClick = {() => sethealthLabel("Vegetarian")}>Vegetarian</option>
            <option
              value="dairy-free"
              nClick = {() => sethealthLabel("dairy-free")}>Dairy-Free</option>
            <option
              value="gluten-free"
              nClick = {() => sethealthLabel("gluten-free")}>Gluten-Free</option>
            <option
              value="low-sugar"
              nClick = {() => sethealthLabel("low-sugar")}>Low-Sugar</option>
              
          </select>

        </form>

        {/* Saving the recipes */}
        <div className="app_recipies">
          {recipes !== [] &&
          recipes.map((recipe) => {
            //Adding prop here
            return <RecipeTiles recipe={recipe} />;
            //return <p>{recipe["recipe"]["label"]}</p>
            //return <img className="recipeTile_img" src={recipe["recipe"]["image"]} />
          })}
        </div>
    </div>
  );
}

export default App;



