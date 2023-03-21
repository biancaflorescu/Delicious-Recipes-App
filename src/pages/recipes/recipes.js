import { useEffect, useState } from "react";
import HomeSection from "../../components/homeSection/homeSection";
import { useParams } from "react-router-dom";
import RecipeCard from "../../components/card/recipeCard";
import { Container } from "react-bootstrap";
import { getRandomRecipesByTag } from "../../services/api";

import "./recipes.css";

const Recipes = () => {
  const [randomRecipesByTag, setRandomRecipesByTag] = useState([]);

  const params = useParams();
  const paramsTag = params.tag;
  const paramsUpperCase =
    params.tag.charAt(0).toUpperCase() + params.tag.slice(1);

  useEffect(() => {
    const getData = async (paramsTag) => {
      const data = await getRandomRecipesByTag(paramsTag);

      const randomRecipesByTag = data.recipes.map((recipe) => {
        return {
          id: recipe.id,
          dishType: paramsUpperCase,
          image: recipe.image ? recipe.image : "../placeholder.jpg",
          title: recipe.title,
          time: recipe.readyInMinutes,
        };
      });

      setRandomRecipesByTag(randomRecipesByTag);
    };
    getData(paramsTag);
  }, [paramsTag]);

  return (
    <div className="recipes-container">
      <Container>
        <HomeSection titleSection={paramsUpperCase} />
        <div className="recipe-card-container flex-wrap">
          {randomRecipesByTag.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              dishType={recipe.dishType}
              image={recipe.image}
              title={recipe.title}
              time={recipe.time}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Recipes;
