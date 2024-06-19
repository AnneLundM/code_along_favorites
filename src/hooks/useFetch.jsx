import { useEffect, useState } from "react";

const useFetch = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    setRecipes(data.recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return { recipes };
};

export default useFetch;
