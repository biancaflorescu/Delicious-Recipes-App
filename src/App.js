import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import Search from "./pages/search/search";
import Recipes from "./pages/recipes/recipes";
// import Favorites from "./pages/favorites/favorites";
import SearchByIngredients from "./pages/searchByIngredients/searchByIngredients";
import SearchByNutrients from "./pages/searchByNutrients/searchByNutrients";
import About from "./pages/about/about";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/favorites" element={<Favorites />} /> */}
          <Route path="/recipes/about/:id" element={<About />} />
          <Route path="/recipes/:tag" element={<Recipes />} />
          <Route
            path="/search-by-ingredients"
            element={<SearchByIngredients />}
          />
          <Route path="/search-by-nutrients" element={<SearchByNutrients />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
