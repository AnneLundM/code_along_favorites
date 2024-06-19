import useFetch from "../../hooks/useFetch";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import PageHeader from "../../components/pageHeader/PageHeader";
import useFetchById from "../../hooks/useFetchById";

const Recipes = () => {
  const { recipes } = useFetch();
  const { recipe } = useFetchById(25);

  return (
    <section>
      <PageHeader title='Opskrifter' headerImg={recipe?.image} />

      <div className='recipes'>
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </section>
  );
};

export default Recipes;
