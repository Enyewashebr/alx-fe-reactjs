import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipeData from "../data.json"; // Adjust the path as needed

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData); // Load mock data
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <span className="text-blue-500 hover:underline">View Recipe</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
