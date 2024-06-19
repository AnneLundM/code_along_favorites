import { useParams } from "react-router-dom";
import useFetchById from "../../hooks/useFetchById";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useFetchById(id);
  console.log(recipe);

  return (
    <section>
      <h1>{recipe?.name}</h1>
    </section>
  );
};

export default RecipeDetails;
