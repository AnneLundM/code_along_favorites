import useFetch from "../../hooks/useFetch";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import PageHeader from "../../components/pageHeader/PageHeader";
import useFetchById from "../../hooks/useFetchById";
import Button from "../../components/button/Button";
import { useState } from "react";
import styles from "../../components/button/button.module.css";

const Recipes = () => {
  const { recipes, breakfast, dinner, lunch } = useFetch();
  const { recipe } = useFetchById(20);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = {
    All: recipes,
    Breakfast: breakfast,
    Dinner: dinner,
    Lunch: lunch,
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredRecipes = filters[activeFilter] || recipes;

  return (
    <section>
      <PageHeader title='Opskrifter' headerImg={recipe?.image} />
      <div className={styles.filterButtons}>
        <Button
          title='All'
          className={activeFilter === "All" ? styles.buttonActive : ""}
          onClick={() => handleFilterChange("All")}
        />
        <Button
          title='Breakfast'
          className={activeFilter === "Breakfast" ? styles.buttonActive : ""}
          onClick={() => handleFilterChange("Breakfast")}
        />
        <Button
          title='Dinner'
          className={activeFilter === "Dinner" ? styles.buttonActive : ""}
          onClick={() => handleFilterChange("Dinner")}
        />
        <Button
          title='Lunch'
          className={activeFilter === "Lunch" ? styles.buttonActive : ""}
          onClick={() => handleFilterChange("Lunch")}
        />
      </div>

      <div className='recipes'>
        {filteredRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </section>
  );
};

export default Recipes;
