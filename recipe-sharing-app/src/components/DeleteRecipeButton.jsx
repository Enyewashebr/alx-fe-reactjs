
import { useRecipeStore } from "../recipeStore";
import PropTypes from "prop-types";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};
DeleteRecipeButton.propTypes = {
  recipeId: PropTypes.number.isRequired,
}
export default DeleteRecipeButton;
