import { useEffect, useState } from "react";
import Product from "./Product";

const api_url = "https://fakestoreapi.com/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getAllProducts = () => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  };
  const getAllCategories = () => {
    fetch(`${api_url}/categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  };
  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);
  const changeCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  };
  return (
    <>
      <h1 className="m-5 products-title">Check Our Hot Products🔥</h1>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={() => {
            getAllProducts();
          }}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="btn btn-primary m-2"
            onClick={() => {
              changeCategory(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="container">
        <div className="row ">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="col-3" key={product.title}>
                <Product product={product} />
              </div>
            ))
          ) : (
            <h3>no products</h3>
          )}
        </div>
      </div>
    </>
  );
};
export default ProductList;
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/EbrahimAboulfadl/Shop-App-CodeZone.git
// git push -u origin main
