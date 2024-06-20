import { useEffect, useState } from "react";

const useFetch = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    setRecipes(data.recipes);
  };

  let rating = recipes.filter((recipe) => recipe.rating > 4.8);
  let breakfast = recipes.filter((recipe) =>
    recipe.mealType.includes("Breakfast")
  );

  useEffect(() => {
    fetchRecipes();
  }, []);

  return { recipes, rating, breakfast };
};

export default useFetch;
