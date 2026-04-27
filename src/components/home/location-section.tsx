
const LocationSection = ({ data }: any) => {
  const locations = data?.locations || data?.data?.locations || [];

  return (
    <section className="wide-tb-120 bg-light-gray">
      <div className="container">

        {/* TITLE */}
        <div className="section-title text-center">
          <h1>Popular Wedding Locations</h1>
          <p>Discover top wedding venues and vendors across India’s most loved cities</p>
        </div>

        <div className="row">

          {locations.map((loc: any, index: number) => (
            <div
              className="col-md-6 col-lg-3 col-xl-4 mb-4"
              key={loc.id || index}
            >

              <div className="popular-locations-alternate">

                {/* IMAGE */}
                <img
                  src={loc.image}
                  alt={loc.name}
                />

                {/* OVERLAY */}
                <div className="overlay-box">

                  <div className="mt-auto">

                    <h3>
                      <a href={`/locations/${loc.slug}`}>
                        {loc.name}
                      </a>

                      <span>
                        {loc.listing_count}+ Listings
                      </span>
                    </h3>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default LocationSection;

