import { useState } from "react";
import Recipe from "./Recipe";
import "./RecipeManager.css";

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: "",
    cuisine: "",
    difficulty: "",
    cookTime: "",
    servings: "",
    allergens: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  }

  function addRecipe(e) {
    e.preventDefault();
    const temp = newRecipe;
    // looping through all keys in newRecipe and check if it's blank. If it is then return
    for (const key of Object.keys(temp)) {
      if (temp[key].trim() === "") {
        return;
      }
    }
    setRecipes((r) => [...r, newRecipe]);
    for (const key of Object.keys(temp)) {
      temp[key] = "";
    }
    setNewRecipe(temp);
    console.log(newRecipe);
  }

  function deleteRecipe(index) {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  }

  return (
    <div className="recipe-manager">
      <h1>Recipe Manager</h1>
      <form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            type="text"
            placeholder="Enter recipe name..."
            name="name"
            value={newRecipe.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter cuisine..."
            name="cuisine"
            value={newRecipe.cuisine}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter cooking time"
            name="cookTime"
            value={newRecipe.cookTime}
            onChange={handleInputChange}
          />

          <input
            type="number"
            placeholder="Enter servings..."
            name="servings"
            value={newRecipe.servings}
            onChange={handleInputChange}
          />
          <input
            type="allergens"
            placeholder="Enter allergens: Eggs, Milk, ..."
            name="allergens"
            value={newRecipe.allergens}
            onChange={handleInputChange}
          />
          <select
            name="difficulty"
            value={newRecipe.difficulty}
            onChange={handleInputChange}
          >
            <option disabled value="">
              Choose difficulty
            </option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <textarea
            type="text"
            placeholder="Enter ingredients..."
            name="ingredients"
            value={newRecipe.ingredients}
            onChange={handleInputChange}
          />
          <button onClick={addRecipe}>Add Recipe</button>
        </div>
      </form>

      <div
        className="recipe-list"
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
      >
        {recipes.map((recipe, index) => (
          <Recipe
            recipe={recipe}
            deleteRecipe={deleteRecipe}
            key={index}
            index={index}
          ></Recipe>
        ))}
      </div>
    </div>
  );
}

export default RecipeManager;
