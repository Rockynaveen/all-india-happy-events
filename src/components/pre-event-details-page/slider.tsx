import React from "react";

type Props = {
  images: string[];
};

const SliderImages: React.FC<Props> = ({ images }) => {
  const carouselId = "vendorCarousel";

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div
      id={carouselId}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={img}
              className="d-block w-100"
              alt="slider"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default SliderImages;