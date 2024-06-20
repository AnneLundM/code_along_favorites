import { useEffect, useState } from "react";

const useFetch = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    setRecipes(data.recipes);
  };

  let dinner = recipes.filter((p) => p.mealType.includes("Dinner"));
  let breakfast = recipes.filter((p) => p.mealType.includes("Breakfast"));
  let lunch = recipes.filter((p) => p.mealType.includes("Lunch"));
  let rating = recipes.filter((p) => p.rating > 4.8);

  useEffect(() => {
    fetchRecipes();
  }, []);

  return { recipes, rating, breakfast, dinner, lunch };
};

export default useFetch;
