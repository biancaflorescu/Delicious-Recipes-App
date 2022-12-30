import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

import "./miniRecipeCardIngredients.css";

const MiniRecipeCardIngredients = ({ id, image, title, ingredients }) => {
  const navigate = useNavigate();

  const handleAboutRedirect = () => {
    navigate(`/recipes/about/${id}`);
  };

  return (
    <Card style={{ width: "18rem" }} onClick={handleAboutRedirect}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Used ingredients:</strong> {ingredients}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MiniRecipeCardIngredients;
