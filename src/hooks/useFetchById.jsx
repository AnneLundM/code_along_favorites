import { useEffect, useState } from "react";

const useFetchById = (id) => {
  const [recipe, setRecipe] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipeById = async (id) => {
    setIsLoading(true);
    const response = await fetch(`http://dummyjson.com/recipes/${id}`);
    const data = await response.json();
    setRecipe(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRecipeById(id);
  }, [id]);

  return { recipe, isLoading };
};

export default useFetchById;
