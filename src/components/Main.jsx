import { useState } from "react";
import { getRecipeFromChefClaude } from "../../ai";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  const [ingredientsState, setIngredientsState] = useState([
    "olives",
    "bacon",
    "pasta from yesterday",
    "broccoli",
    "sausages",
    "sweet corn canned",
    "canned sardines",
  ]);

  const [receivedRecipe, setReceivedRecipe] = useState("");

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
  async function getAndShowRecipe() {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredientsState)
    setReceivedRecipe(recipeMarkdown)
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
      {hasAnyIngredient && (
        <IngredientsList
          ingredients={ingredientsState}
          handleClick={getAndShowRecipe}
        />
      )}

      {/* Recipe generated */}
      {receivedRecipe && <ClaudeRecipe generatedRecipe={receivedRecipe} />}
    </main>
  );
}
