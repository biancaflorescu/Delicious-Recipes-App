import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./search.css";

const Search = () => {
  const [ingredients, setIngredients] = useState("");
  const [minCalories, setMinCalories] = useState("");
  const [maxCalories, setMaxCalories] = useState("");
  const [minCarbs, setMinCarbs] = useState("");
  const [maxCarbs, setMaxCarbs] = useState("");
  const [minProtein, setMinProtein] = useState("");
  const [maxProtein, setMaxProtein] = useState("");
  const [minFat, setMinFat] = useState("");
  const [maxFat, setMaxFat] = useState("");

  const navigate = useNavigate();

  const handleSearchByIngredients = (e) => {
    e.preventDefault();
    navigate(`/search-by-ingredients?ingredients=${ingredients}`);
  };

  const handleSearchByNutrients = (e) => {
    e.preventDefault();
    navigate(
      `/search-by-nutrients?minCalories=${minCalories}&maxCalories=${maxCalories}&minCarbs=${minCarbs}&maxCarbs=${maxCarbs}&minProtein=${minProtein}&maxProtein=${maxProtein}&minFat=${minFat}&maxFat=${maxFat}`
    );
  };

  return (
    <Container>
      <div className="search-content">
        <div className="search-ingredients">
          <Form onSubmit={handleSearchByIngredients}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="search-title">
                Search by ingredients
              </Form.Label>
              <Form.Control
                onChange={(e) => setIngredients(e.target.value)}
                type="text"
                placeholder="apples, flour, sugar"
              />
            </Form.Group>
            <Button onClick={handleSearchByIngredients}>Search</Button>
          </Form>
        </div>
        <div className="search-vertical-line"></div>
        <div className="search-nutrients">
          <p className="search-title">Search by nutrients</p>
          <Form onSubmit={handleSearchByNutrients}>
            <Row>
              <Col className="first">
                <Form.Label>Min Calories</Form.Label>
                <Form.Control
                  type="number"
                  min="50"
                  max="800"
                  min-value="50"
                  placeholder="50"
                  onChange={(e) => setMinCalories(e.target.value)}
                />
              </Col>
              <Col className="first">
                <Form.Label>Max Calories</Form.Label>
                <Form.Control
                  type="number"
                  min="50"
                  max="800"
                  max-value="800"
                  placeholder="800"
                  onChange={(e) => setMaxCalories(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Min Carbs</Form.Label>
                <Form.Control
                  type="number"
                  min="10"
                  max="100"
                  min-value="10"
                  placeholder="10"
                  onChange={(e) => setMinCarbs(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>Max Carbs</Form.Label>
                <Form.Control
                  type="number"
                  min="10"
                  max="100"
                  max-value="100"
                  placeholder="100"
                  onChange={(e) => setMaxCarbs(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Min Protein</Form.Label>
                <Form.Control
                  type="number"
                  min="10"
                  max="100"
                  min-value="10"
                  placeholder="10"
                  onChange={(e) => setMinProtein(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>Max Protein</Form.Label>
                <Form.Control
                  type="number"
                  min="10"
                  max="100"
                  max-value="100"
                  placeholder="100"
                  onChange={(e) => setMaxProtein(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>Min Fat</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  max="100"
                  min-value="1"
                  placeholder="1"
                  onChange={(e) => setMinFat(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>Max Fat</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  max="100"
                  max-value="100"
                  placeholder="100"
                  onChange={(e) => setMaxFat(e.target.value)}
                />
              </Col>
            </Row>
            <Button
              variant="primary"
              type="submit"
              onClick={handleSearchByNutrients}
            >
              Search
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Search;
