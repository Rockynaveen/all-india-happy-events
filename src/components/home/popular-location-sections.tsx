interface City {
  id: number;
  name: string;
  image: string;
  vendors_count: number;
}

const PopularLocationsSection = ({ cities }: { cities: City[] }) => {
  return (
    <section className="wide-tb-120 bg-light-gray">
      <div className="container">
        <div className="section-title text-center">
          <h1>Popular Wedding Locations</h1>
          <p>
            Discover top wedding venues and vendors across India’s most loved cities
          </p>
        </div>

        <div className="row">

          {cities.map((city) => (
            <div className="col-md-6 col-lg-4 col-xl-4" key={city.id}>
              
              {/* EXACT SAME */}
              <div className="popular-locations-alternate">

                <div className="overlay-box">
                  <div className="mt-auto">
                    <h3>
                      <a href="#">
                        {city.name}
                      </a>

                      {/* SAME TEXT STYLE */}
                      <span>
                        {city.vendors_count}+ Listings
                      </span>
                    </h3>
                  </div>
                </div>

                {/* IMAGE MUST BE LAST (important for overlay CSS) */}
                <img src={city.image} alt={city.name} />

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PopularLocationsSection;