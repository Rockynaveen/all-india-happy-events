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
  data: {
    categories: Category[];
    cities: City[];
  };
}

// 🔹 icon mapping
const getIcon = (name: string) => {
  if (name.toLowerCase().includes("venue")) return "weddingdir_venue";
  if (name.toLowerCase().includes("photo")) return "weddingdir_camera";
  if (name.toLowerCase().includes("makeup")) return "weddingdir_fashion";
  if (name.toLowerCase().includes("decor")) return "weddingdir_flowers";
  if (name.toLowerCase().includes("music")) return "weddingdir_music";
  return "weddingdir_cake_floor";
};

const Hero = ({ data }: HeroProps) => {
  const categories = data?.categories || [];
  const cities = data?.cities || [];

  return (
    <section className="slider-wrap style-second">
      <div className="slider-content">
        <div className="container">
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
                  <select className="form-light-select theme-combo home-select-1 py-2">
                    <option>Select Vendor Category</option>

                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.slug}>
                        {cat.name === "Photo & Vedio Graphers"
                          ? "Photography & Films"
                          : cat.name}
                      </option>
                    ))}

                  </select>
                </div>

                {/* LOCATION */}
                <div className="col-12 col-md-5">
                  <div className="px-2 w-100">
                    <select className="form-light-select theme-combo home-select-2 py-2">
                      <option>Select Location</option>

                      {cities.map((city) => (
                        <option key={city.id} value={city.name}>
                          {city.name}
                        </option>
                      ))}

                    </select>
                  </div>
                </div>

                {/* BUTTON */}
                <div className="col-12 col-md-2">
                  <a href="#" className="btn btn-default text-nowrap btn-block">
                    Search Now
                  </a>
                </div>

              </div>

              <p className="lead txt-white text-center">
                Or browse featured categories
              </p>

              {/* 🔥 ICONS */}
              <div className="slider-category">

                {categories.slice(0, 5).map((cat) => (
                  <a key={cat.id} href="#">
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