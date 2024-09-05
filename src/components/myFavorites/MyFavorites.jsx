import { useLocalStorage } from "@uidotdev/usehooks";
import useFetch from "../../hooks/useFetch";
import RecipeCard from "../recipeCard/RecipeCard";

const MyFavorites = () => {
  const { recipes } = useFetch();
  const [favorites] = useLocalStorage("Favorites", []);

  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  // console.log(favoriteRecipes);

  return (
    <section className='recipes'>
      {favoriteRecipes?.map((recipe) => (
        <RecipeCard isFavorite={true} key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
};

export default MyFavorites;
