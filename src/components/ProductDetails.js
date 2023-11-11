import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => response.json())
      .then((responseData) => {
        setProduct(responseData);
      });
  }, [params.productId]);
  return (
    <>
      <div className={classes["product-details"]}>
        <img
          className={classes.image}
          src={product.image}
          alt={product.title}
        />
        <div className={classes.details}>
          <h6 className={classes.title}>{product.title}</h6>
          <p className={classes.description}>{product.description}</p>
          <span className={classes.price}> ${product.price}</span>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
