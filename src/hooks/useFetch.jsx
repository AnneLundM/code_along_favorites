import { useEffect, useState } from "react";

const useFetch = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Kald funktionen for at hente opskrifter, fx når komponenten mounts
  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      setError(error.message);
      console.error("Failed to fetch:", error);
    } finally {
      setIsLoading(false);
    }
  };

  let dinner = recipes.filter((p) => p.mealType.includes("Dinner"));
  let breakfast = recipes.filter((p) => p.mealType.includes("Breakfast"));
  let lunch = recipes.filter((p) => p.mealType.includes("Lunch"));
  let rating = recipes.filter((p) => p.rating > 4.8);

  useEffect(() => {
    fetchRecipes();
  }, []);

  return { recipes, rating, breakfast, dinner, lunch, isLoading, error };
};

export default useFetch;
