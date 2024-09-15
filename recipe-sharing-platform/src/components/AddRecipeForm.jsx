import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // State for errors

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Recipe title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    if (!steps) newErrors.steps = "Cooking steps are required";

    const ingredientsList = ingredients
      .split(",")
      .map((ingredient) => ingredient.trim());
    if (ingredientsList.length < 2) {
      newErrors.ingredients = "Please enter at least two ingredients";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // Clear errors if validation passes

    // Handle adding the recipe (e.g., send to backend or update state)
    const ingredientsList = ingredients
      .split(",")
      .map((ingredient) => ingredient.trim());
    console.log({
      title,
      ingredients: ingredientsList,
      steps: steps.split("\n").map((step) => step.trim()),
    });

    // Clear form fields
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md"
    >
      {errors.title && <p className="text-red-500 mb-2">{errors.title}</p>}
      <div className="mb-4">
        <label className="block text-sm font-medium">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      {errors.ingredients && (
        <p className="text-red-500 mb-2">{errors.ingredients}</p>
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium">
          Ingredients (comma-separated)
        </label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      {errors.steps && <p className="text-red-500 mb-2">{errors.steps}</p>}
      <div className="mb-4">
        <label className="block text-sm font-medium">Cooking Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
