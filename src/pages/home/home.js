import { useEffectOnce } from "../../customHooks/customHooks";
import { useState } from "react";
import { Container } from "react-bootstrap";
import RecipeCard from "../../components/card/recipeCard";
import HomeSection from "../../components/homeSection/homeSection";
import Subheader from "../../components/subheader/subheader";
import { getRandomRecipes } from "../../services/api";

import "./home.css";

const Home = () => {
  const [randomNewRecipes, setRandomNewRecipes] = useState([]);
  const [randomPopularRecipes, setRandomPopularRecipes] = useState([]);

  useEffectOnce(() => {
    const getData = async () => {
      const data = await getRandomRecipes();

      console.log(data);

      const randomNewRecipes = data.recipes
        .filter((recipe, index) => index <= 3)
        .map((recipe) => {
          return {
            id: recipe.id,
            dishType:
              recipe.dishTypes.length > 0 ? recipe.dishTypes[0] : "dish",
            image: recipe.image ? recipe.image : "../placeholder.jpg",
            title: recipe.title,
            time: recipe.readyInMinutes,
          };
        });

      const randomPopularRecipes = data.recipes
        .filter((recipe, index) => index >= 4 && index <= 7)
        .map((recipe) => {
          return {
            id: recipe.id,
            dishType:
              recipe.dishTypes.length > 0 ? recipe.dishTypes[0] : "dish",
            image: recipe.image ? recipe.image : "../placeholder.jpg",
            title: recipe.title,
            time: recipe.readyInMinutes,
          };
        });

      setRandomNewRecipes(randomNewRecipes);
      setRandomPopularRecipes(randomPopularRecipes);
    };
    getData();
  }, []);

  return (
    <div>
      <Subheader />
      <Container>
        <HomeSection titleSection="New Recipes" />
        <div className="recipe-card-container">
          {randomNewRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              dishType={
                recipe.dishType.charAt(0).toUpperCase() +
                recipe.dishType.slice(1)
              }
              image={recipe.image}
              title={recipe.title}
              time={recipe.time}
            />
          ))}
        </div>

        <HomeSection titleSection="Popular Recipes" />
        <div className="recipe-card-container">
          {randomPopularRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              dishType={
                recipe.dishType.charAt(0).toUpperCase() +
                recipe.dishType.slice(1)
              }
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

export default Home;
