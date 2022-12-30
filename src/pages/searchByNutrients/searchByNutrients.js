import { useEffectOnce } from "../../customHooks/customHooks";
import { getRecipesByNutrients } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Container } from "react-bootstrap";
import HomeSection from "../../components/homeSection/homeSection";
import MiniRecipeCardNutrients from "../../components/miniRecipeCardNutrients/miniRecipeCardNutrients";

import "./searchByNutrients.css";

const SearchByNutrients = () => {
  const [recipesByNutrients, setRecipesByNutrients] = useState([]);

  const [searchParams] = useSearchParams();

  const minCalories = searchParams.get("minCalories");
  const maxCalories = searchParams.get("maxCalories");
  const minCarbs = searchParams.get("minCarbs");
  const maxCarbs = searchParams.get("maxCarbs");
  const minProtein = searchParams.get("minProtein");
  const maxProtein = searchParams.get("maxProtein");
  const minFat = searchParams.get("minFat");
  const maxFat = searchParams.get("maxFat");

  useEffectOnce(() => {
    const getData = async () => {
      const data = await getRecipesByNutrients(
        minCalories,
        maxCalories,
        minCarbs,
        maxCarbs,
        minProtein,
        maxProtein,
        minFat,
        maxFat
      );
      console.log(data);

      const recipesByNutrients = data.map((recipe) => {
        return {
          id: recipe.id,
          image: recipe.image ? recipe.image : "../placeholder.jpg",
          title: recipe.title,
          calories: recipe.calories,
          carbs: recipe.carbs,
          protein: recipe.protein,
          fat: recipe.fat,
        };
      });

      setRecipesByNutrients(recipesByNutrients);
    };
    getData();
  }, []);

  return (
    <div className="recipes-container">
      <Container>
        <HomeSection titleSection="Searched results" />
        <div className="recipe-card-container flex-wrap">
          {recipesByNutrients.length > 0
            ? recipesByNutrients.map((recipe) => (
                <MiniRecipeCardNutrients
                  key={recipe.id}
                  id={recipe.id}
                  image={recipe.image}
                  title={recipe.title}
                  calories={recipe.calories}
                  carbs={recipe.carbs}
                  protein={recipe.protein}
                  fat={recipe.fat}
                />
              ))
            : "There are no results for your search."}
        </div>
      </Container>
    </div>
  );
};

export default SearchByNutrients;
