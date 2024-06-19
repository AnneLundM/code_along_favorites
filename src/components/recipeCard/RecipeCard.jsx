/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./recipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe.id}`}>
      <figure className={styles.recipeCard}>
        <img src={recipe.image} />
        <figcaption>
          <h2>{recipe.name}</h2>
        </figcaption>
      </figure>
    </Link>
  );
};

export default RecipeCard;
