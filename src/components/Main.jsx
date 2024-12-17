import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  const [ingredientsState, setIngredientsState] = useState([
    "olives",
  ]);
  const [recipeShown, setRecipeShown] = useState(false);

  //condition render the list variable --> true or false
  let hasAnyIngredient = ingredientsState.length > 0;

  //Add ingredient to display - form handle
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient"); // "ingredient" is the name we set on the input

    if (newIngredient != "") {
      setIngredientsState((prevState) => [...prevState, newIngredient]);
    }
  }

  //Rendering the generated recipe
  // Get recipe button handle
  function getRecipe() {
    setRecipeShown((prevState) => !prevState); // --> true or false
  }

  return (
    <main>
      <form action={addIngredient} className="search-bar-form">
        <input
          aria-label="Add ingredient"
          type="text"
          name="ingredient"
          placeholder="e.g oregano"
        />
        <button className="submit-btn" type="submit">
          + Add Ingredient
        </button>
      </form>

      {/* List of Ingredients added and generate recipe button section */}
      {hasAnyIngredient &&
        <IngredientsList 
          ingredients = {ingredientsState}
          handleClick = {getRecipe}
        />
      }

      {/* Recipe generated */}
      {recipeShown && <ClaudeRecipe />}
        
    </main>
  );
}
