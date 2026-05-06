import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface City {
  id: number;
  name: string;
}

interface HeroProps {
  data?: {
    categories?: Category[];
    cities?: City[];
  };
}

// 🔹 icon mapping
const getIcon = (name: string = "") => {
  const lower = name.toLowerCase();

  if (lower.includes("venue")) return "weddingdir_venue";
  if (lower.includes("photo")) return "weddingdir_camera";
  if (lower.includes("makeup")) return "weddingdir_fashion";
  if (lower.includes("decor")) return "weddingdir_flowers";
  if (lower.includes("music")) return "weddingdir_music";

  return "weddingdir_cake_floor";
};

const Hero = ({ data }: HeroProps) => {
  const categories = data?.categories ?? [];
  const cities = data?.cities ?? [];

  // ✅ state for dropdowns
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

  // ✅ search handler
  const handleSearch = () => {
    if (!selectedCategory && !selectedCity) {
      alert("Please select at least one filter");
      return;
    }

    // build query params
    const params = new URLSearchParams();

    if (selectedCategory) params.append("category_slug", selectedCategory);
    if (selectedCity) params.append("city", selectedCity);

    // 🔥 redirect to vendors page
    navigate(`/vendors?${params.toString()}`);
  };

  return (
    <section className="slider-wrap style-second">
      <div
        className="slider-content"
        style={{ position: "absolute", zIndex: 10 }}
      >        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-12 mx-auto">

              <h1>Find Most Trusted Vendors for All Your Celebrations</h1>

              <p className="lead txt-white text-center">
                Explore verified venues, photographers, makeup artists, and more —
                with genuine reviews, transparent pricing, and real availability.
              </p>

              {/* 🔥 SEARCH BOX */}
              <div className="form-bg row no-gutters align-items-center">

                {/* CATEGORY */}
                <div className="col-12 col-md-5">
                  <select
                    className="form-light-select theme-combo home-select-1 py-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Select Vendor Category</option>

                    {categories.length > 0 ? (
                      categories.map((cat) => (
                        <option key={cat.id} value={cat.slug}>
                          {cat.name}
                        </option>
                      ))
                    ) : (
                      <option disabled>No categories found</option>
                    )}
                  </select>
                </div>

                {/* LOCATION */}
                <div className="col-12 col-md-5">
                  <div className="px-2 w-100">
                    <select
                      className="form-light-select theme-combo home-select-2 py-2"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                    >
                      <option value="">Select Location</option>

                      {cities.length > 0 ? (
                        cities.map((city) => (
                          <option key={city.id} value={city.id}>
                            {city.name}
                          </option>
                        ))
                      ) : (
                        <option disabled>No cities found</option>
                      )}
                    </select>
                  </div>
                </div>

                {/* BUTTON */}
                <div className="col-12 col-md-2">
                  <button
                    onClick={handleSearch}
                    className="btn btn-default text-nowrap btn-block"
                  >
                    Search Now
                  </button>
                </div>

              </div>

              <p className="lead txt-white text-center mt-3">
                Or browse featured categories
              </p>

              {/* 🔥 ICONS */}
              <div className="slider-category text-center">

                {categories.length > 0 &&
                  categories.slice(0, 5).map((cat) => (
                    <a
                      key={cat.id}
                      href={`/vendors?category_slug=${cat.slug}`}
                    >
                      <i className={getIcon(cat.name)}></i>
                    </a>
                  ))}

                <a href="#" className="more-icon">
                  <i className="fa-solid fa-ellipsis"></i>
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;