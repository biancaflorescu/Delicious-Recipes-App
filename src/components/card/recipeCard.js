import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

import "./recipeCard.css";

const RecipeCard = ({ id, dishType, image, title, time }) => {
  const navigate = useNavigate();

  const handleAboutRedirect = () => {
    navigate(`/recipes/about/${id}`);
  };

  return (
    <Card style={{ width: "18rem" }} onClick={handleAboutRedirect}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <p className="card-badge">{dishType}</p>
        <Card.Title>{title}</Card.Title>
        <div className="card-timer-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-stopwatch"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
          </svg>
          <p className="card-minutes">{time} mins</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
