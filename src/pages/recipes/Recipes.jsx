import useFetch from "../../hooks/useFetch";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import PageHeader from "../../components/pageHeader/PageHeader";
import useFetchById from "../../hooks/useFetchById";
import Button from "../../components/button/Button";
import { useState } from "react";

const Recipes = () => {
  const { recipes, breakfast, dinner, lunch } = useFetch();
  const { recipe } = useFetchById(20);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = {
    All: recipes,
    Breakfast: breakfast,
    Dinner: dinner,
    Lunch: lunch,
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setFilteredRecipes(filters[activeFilter]);
  };

  const recipesArray = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <section>
      <PageHeader title='Opskrifter' headerImg={recipe?.image} />
      <div className='filterButtons'>
        <Button
          title='All'
          className={activeFilter === "All" ? "buttonActive" : ""}
          onClick={() => handleFilterChange("All")}
        />
        <Button
          title='Breakfast'
          className={activeFilter === "Breakfast" ? "buttonActive" : ""}
          onClick={() => handleFilterChange("Breakfast")}
        />
        <Button
          title='Dinner'
          className={activeFilter === "Dinner" ? "buttonActive" : ""}
          onClick={() => handleFilterChange("Dinner")}
        />
        <Button
          title='Lunch'
          className={activeFilter === "Lunch" ? "buttonActive" : ""}
          onClick={() => handleFilterChange("Lunch")}
        />
      </div>

      <div className='recipes'>
        {recipesArray.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </section>
  );
};

export default Recipes;
