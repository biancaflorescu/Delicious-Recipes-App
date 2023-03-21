import { getRecipesByIngredients } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import MiniRecipeCardIngredients from "../../components/miniRecipeCardIngredients/miniRecipeCardIngredients";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HomeSection from "../../components/homeSection/homeSection";

import "./searchByIngredients.css";

const SearchByIngredients = () => {
  const [recipesByIngredients, setRecipesByIngredients] = useState([]);

  const [searchParams] = useSearchParams();

  const ingredients = searchParams.get("ingredients");

  useEffect(() => {
    const getData = async () => {
      const data = await getRecipesByIngredients(ingredients);
      console.log(data);

      const recipesByIngredients = data.map((recipe) => {
        return {
          id: recipe.id,
          image: recipe.image ? recipe.image : "../placeholder.jpg",
          title: recipe.title,
          ingredients: recipe.usedIngredients.map(
            (ingredient) => ingredient.name
          ),
        };
      });

      setRecipesByIngredients(recipesByIngredients);
    };
    getData();
  }, []);

  return (
    <div className="recipes-container">
      <Container>
        <HomeSection titleSection="Searched results" />
        <div className="recipe-card-container flex-wrap">
          {recipesByIngredients.map((recipe) => (
            <MiniRecipeCardIngredients
              key={recipe.id}
              id={recipe.id}
              image={recipe.image}
              title={recipe.title}
              ingredients={recipe.ingredients.join(", ")}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SearchByIngredients;
