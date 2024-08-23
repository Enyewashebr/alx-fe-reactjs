
import { useRecipeStore } from "../recipeStore";
import PropTypes from "prop-types";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
    </div>
  );
};
RecipeDetails.propTypes = {
  recipeId: PropTypes.number.isRequired
}

export default RecipeDetails;
