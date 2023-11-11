import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <ProductList />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <h2>about page</h2>
            </>
          }
        />{" "}
        <Route
          path="/products/:productId"
          element={
            <>
              <ProductDetails />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
