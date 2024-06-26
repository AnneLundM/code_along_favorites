/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./recipeCard.module.css";
import { FcLike, FcDislike } from "react-icons/fc";
import { useLocalStorage } from "@uidotdev/usehooks";

const RecipeCard = ({ recipe }) => {
  const [favorites, setFavorites] = useLocalStorage("Favorites", []);
  const isFavorite = favorites.includes(recipe.id);

  const handleLike = () => {
    setFavorites((prevFavorites) =>
      isFavorite
        ? prevFavorites.filter((fav) => fav !== recipe.id)
        : [...prevFavorites, recipe.id]
    );
  };

  return (
    <figure className={styles.recipeCard}>
      <Link to={`/recipes/${recipe.id}`}>
        <img src={recipe.image} />
      </Link>

      <figcaption>
        <h2>{recipe.name}</h2>
        {isFavorite ? (
          <FcDislike size={30} onClick={handleLike} />
        ) : (
          <FcLike size={30} onClick={handleLike} />
        )}
      </figcaption>
    </figure>
  );
};

export default RecipeCard;
