const VendorListSection = ({ vendors }: any) => {
  if (!vendors?.length) return null;

  return (
    <div className="tab-content theme-tabbing search-result-tabbing" id="pills-tabContent">

      <div
        className="tab-pane fade active show"
        id="pills-listing"
        role="tabpanel"
        aria-labelledby="pills-listing-tab"
      >

        {/* LOOP VENDORS */}
        {vendors.map((vendor: any, index: number) => (
          <div className="result-list" key={vendor.id || index}>
            <div className="row">

              {/* IMAGE */}
              <div className="col-md-4">
                <div className="img">

                  {vendor.is_premium && (
                    <span className="featured">
                      <i className="fa fa-star"></i>
                      <span>Handpicked</span>
                    </span>
                  )}

                  <a href={`/vendor/${vendor.slug}`}>
                    <img
                      src={vendor.thumbnail}
                      alt={vendor.brand_name}
                      className="rounded"
                    />
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="col-md-8">
                <div className="content">

                  <div className="head">

                    <a href="#" className="favorite active">
                      <i className="fa fa-heart"></i>
                    </a>

                    <h3>
                      <a href={`/vendor/${vendor.slug}`}>
                        {vendor.brand_name}
                      </a>
                    </h3>

                    <div className="rating">
                      <span className="stars">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i
                            key={i}
                            className={
                              i < vendor.rating
                                ? "fa fa-star"
                                : "fa-regular fa-star"
                            }
                          ></i>
                        ))}
                      </span>

                      ({vendor.total_reviews} review)
                    </div>

                  </div>

                  {/* LOCATION */}
                  <p className="text-muted">
                    <i className="fa-solid fa-location-dot"></i>{" "}
                    {vendor.address?.city_id}, {vendor.address?.state_id}
                  </p>

                  {/* SERVICES (from menus fallback) */}
                  <p className="text-muted">
                    {vendor.menus?.length
                      ? vendor.menus.map((m: any) => m.name).join(" + ")
                      : "Photo + Video"}
                  </p>

                  {/* PRICE */}
                  <h4 className="fw-bold">
                    <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                    {Number(vendor.per_day_price).toLocaleString("en-IN")} per day
                  </h4>

                  {/* BOTTOM */}
                  <div className="bottom">

                    <a href="#">
                      <span className="badge border rounded p-2">
                        Average Bookings {Math.floor(Math.random() * 300)}
                      </span>
                    </a>

                    <div className="hover-more">
                      <a href="#">
                        <span className="badge border rounded p-2 more-btn">
                          +{vendor.menus?.length || 3} more...
                        </span>
                      </a>

                      <ul className="more-list">
                        <li>Average Bookings {Math.floor(Math.random() * 300)}</li>
                        <li>Shot In 3 Cities</li>
                        <li>On Time Service 10 votes</li>
                        <li>Value for Money 15 votes</li>
                      </ul>
                    </div>

                    <a
                      href={`/vendor/${vendor.slug}`}
                      className="btn btn-outline-primary btn-rounded"
                    >
                      Request Pricing
                    </a>

                  </div>

                </div>
              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default VendorListSection;