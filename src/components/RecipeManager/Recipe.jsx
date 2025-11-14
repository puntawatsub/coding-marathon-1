const Recipe = ({ recipe, deleteRecipe, index }) => {
  return (
    <li className="card">
      <section>
        <h3>{recipe.name}</h3>
        <span>
          <span>Cuisine:</span> {recipe.cuisine}
        </span>
        <span>
          <span>Difficulty:</span> {recipe.difficulty}
        </span>
        <span>
          <span>Cook time: </span> {recipe.cookTime}
        </span>
        <span>
          <span>Servings: </span>
          {recipe.servings}
        </span>
        <span>
          <span>Ingredients: </span>
          {recipe.ingredients}
        </span>
        <span>
          <span>Allergens: </span>
          {recipe.allergens}
        </span>
      </section>
      <button onClick={() => deleteRecipe(index)}>Delete</button>
    </li>
  );
};

export default Recipe;

// const testRecipe = {
//   name: "Tom Yum",
//   ingredients:
//     "lemongrass, galangal, lime leaf, shrimp, evaporated milk, chili paste",
//   cuisine: "Thai",
//   difficulty: "Hard",
//   cookTime: "30 mins",
//   servings: "1",
//   allergens: "milk, shrimp",
// };
