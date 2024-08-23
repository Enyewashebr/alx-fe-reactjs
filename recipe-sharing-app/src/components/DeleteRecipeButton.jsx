
import { useRecipeStore } from "../recipeStore";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
    const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
     navigate("/recipes");
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};
DeleteRecipeButton.propTypes = {
  recipeId: PropTypes.number.isRequired,
}
export default DeleteRecipeButton;
