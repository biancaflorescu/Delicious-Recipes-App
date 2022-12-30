import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

import "./miniRecipeCardNutrients.css";

const MiniRecipeCardNutrients = ({
  id,
  image,
  title,
  calories,
  carbs,
  protein,
  fat,
}) => {
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
          &bull; <strong>Calories:</strong> {calories} <br />
          &bull; <strong>Carbs:</strong> {carbs} <br />
          &bull; <strong>Protein:</strong> {protein} <br />
          &bull; <strong>Fat:</strong> {fat} <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MiniRecipeCardNutrients;
