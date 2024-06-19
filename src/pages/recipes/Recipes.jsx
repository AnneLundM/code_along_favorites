import useFetch from "../../hooks/useFetch";
import RecipeCard from "../../components/recipeCard/RecipeCard";

const Recipes = () => {
  const { recipes } = useFetch();
  console.log(recipes);

  return (
    <section>
      <h1>Opskrifter</h1>

      <div className='recipes'>
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </section>
  );
};

export default Recipes;
