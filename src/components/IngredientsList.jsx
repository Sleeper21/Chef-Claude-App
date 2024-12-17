export default function IngredientsList(props) {

  //Map the state array of ingredients and display then in a list item
  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>  
  ));
  
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list wrapper">{ingredientsListItems}</ul>

      {props.ingredients.length > 3 && (
        <div className="get-recipe-container wrapper">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button className="get-recipe-btn" onClick={props.handleClick}>
            Get a Recipe
          </button>
        </div>
      )}
    </section>
  );
}
