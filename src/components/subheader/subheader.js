import { Container } from "react-bootstrap";
import "./subheader.css";

const Subheader = () => {
  return (
    <div className="subheader">
      <Container>
        <p className="subheader-title">
          Welcome to <span className="app-title">DELICIOUS</span>
        </p>
        <p>
          Find the perfect food and drink ideas for every occasion, from
          weeknight dinners to holiday feasts.
        </p>
      </Container>
    </div>
  );
};

export default Subheader;
