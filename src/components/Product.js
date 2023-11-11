import { Link } from "react-router-dom";
const Product = (props) => {
  const { image, title, description, id } = props.product;
  return (
    <>
      <div className="card mb-2 product-card">
        <img src={image} className="card-img-top product-image " alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text product-description">{description}</p>
          <Link to={`/products/${id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </>
  );
};
export default Product;
