import { Container } from "react-bootstrap";
import RecipeCard from "../../components/card/recipeCard";
import HomeSection from "../../components/homeSection/homeSection";
import "./favorites.css";

const Favorites = () => {
  return (
    <div className="recipes-container">
      <Container>
        <HomeSection titleSection={"Favorites"} />
        <div className="recipe-card-container flex-wrap">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </Container>
    </div>
  );
};

export default Favorites;
