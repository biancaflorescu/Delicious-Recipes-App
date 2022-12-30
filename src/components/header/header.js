import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import {
  mealTypes,
  cuisines,
  diets,
  intolerances,
} from "../../services/localDB";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    navigate("/");
  };

  const handleSearchRedirect = () => {
    navigate(`/search`);
  };

  const handleFavoritesRedirect = () => {
    navigate(`/favorites`);
  };

  const handleMealTypeRedirect = (mealType) => {
    const mealTypeParam = mealType.toLowerCase();
    navigate(`/recipes/${mealTypeParam}`);
  };

  const handleCuisineRedirect = (cuisine) => {
    const cuisineParam = cuisine.toLowerCase();
    navigate(`/recipes/${cuisineParam}`);
  };

  const handleDietRedirect = (diet) => {
    const dietParam = diet.toLowerCase();
    navigate(`/recipes/${dietParam}`);
  };

  const handleIntoleranceRedirect = (intolerance) => {
    const intoleranceParam = intolerance.toLowerCase();
    navigate(`/recipes/${intoleranceParam}`);
  };

  return (
    <div>
      <Navbar expand="lg" className="fixed-top">
        {/* <Navbar expand="lg"> */}
        <Container>
          <Navbar.Brand onClick={handleHomeRedirect}>
            <img src="/logo.png" width="70" height="70" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Meal Type" id="basic-nav-dropdown">
                {mealTypes.map((mealType) => (
                  <NavDropdown.Item
                    onClick={() => handleMealTypeRedirect(mealType)}
                  >
                    {mealType}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title="Cuisine" id="basic-nav-dropdown2">
                {cuisines.map((cuisine) => (
                  <NavDropdown.Item
                    onClick={() => handleCuisineRedirect(cuisine)}
                  >
                    {cuisine}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title="Diet" id="basic-nav-dropdown3">
                {diets.map((diet) => (
                  <NavDropdown.Item onClick={() => handleDietRedirect(diet)}>
                    {diet}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title="Intolerances" id="basic-nav-dropdown3">
                {intolerances.map((intolerance) => (
                  <NavDropdown.Item
                    onClick={() => handleIntoleranceRedirect(intolerance)}
                  >
                    {intolerance}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 555"
            width="30"
            height="30"
            className="heart-icon"
            // onClick={handleFavoritesRedirect}
          >
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
            onClick={handleSearchRedirect}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
