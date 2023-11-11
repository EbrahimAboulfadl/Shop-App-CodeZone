import "./Carousel.css";
const Carousel = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.pinimg.com/originals/96/71/5b/96715bbf8952e54608f71d8894ee5472.jpg"
              className="d-block w-100 slider-img"
              alt="..."
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://i.pinimg.com/1200x/ed/cd/32/edcd32b829a5c6e614a6d6383c562742.jpg"
              className="d-block w-100  slider-img"
              alt="..."
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://img.freepik.com/free-vector/online-shopping-banner-with-3d-shopping-cart-clouds-social-icons-vector-illustration_548887-100.jpg?size=626&ext=jpg"
              className="d-block w-100 slider-img"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Carousel;
