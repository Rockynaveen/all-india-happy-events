import React from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  vendor_count: number;
}

// 🔹 Helper → group into 3 per slide
const chunkArray = (arr: Category[], size: number) => {
  const result: Category[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

// 🔹 Icon mapping (same as your design)
const getIcon = (name: string) => {
  if (name.toLowerCase().includes("venue")) return "weddingdir_venue";
  if (name.toLowerCase().includes("photo")) return "weddingdir_camera";
  if (name.toLowerCase().includes("cake")) return "weddingdir_cake";
  if (name.toLowerCase().includes("music")) return "weddingdir_music";
  if (name.toLowerCase().includes("fashion")) return "weddingdir_fashion";
  if (name.toLowerCase().includes("ritual")) return "weddingdir_pheras";
  return "weddingdir_venue";
};

const CategoriesSection = ({ categories }: { categories: Category[] }) => {
  const slides = chunkArray(categories, 3); // ✅ 3 cards per slide

  if (!categories || categories.length === 0) return null;

  return (
    <section className="wide-tb-120">
      <div className="container">
        <div className="section-title text-center">
          <h1>Popular Wedding Categories</h1>
          <p>
            Browse trusted vendors across India for venues, photography,
            bridal fashion, décor and more.
          </p>
        </div>

        {/* ✅ Bootstrap Carousel */}
        <div
          id="categoriesCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">

            {slides.map((group, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="row">

                  {group.map((category) => (
                    <div className="col-md-6 col-lg-4" key={category.id}>
                      
                      {/* 🔥 SAME HTML STRUCTURE */}
                      <div className="item">
                        <div className="popular-categories">

                          <img
                            src={category.image}
                            alt={category.name}
                          />

                          <div className="content-wrap">
                            <div className="content">
                              <div className="mt-auto d-flex align-items-center w-100 justify-content-between">

                                <div className="catlinks">
                                  <a href="#">
                                    <h3>
                                      {category.name === "Photo & Vedio Graphers"
                                        ? "Photography & Films"
                                        : category.name}
                                    </h3>
                                  </a>

                                  <a href="#">
                                    <span className="count-listings">
                                      {category.vendor_count} vendors
                                    </span>
                                  </a>
                                </div>

                                <a href="#" className="icon">
                                  <i className={getIcon(category.name)}></i>
                                </a>

                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  ))}

                </div>
              </div>
            ))}

          </div>

          {/* ✅ Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#categoriesCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#categoriesCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;