import { Link } from "react-router-dom";

const VendorList = ({ vendors }: any) => {
  if (!vendors || vendors.length === 0) {
    return <p className="text-center py-5">No vendors found</p>;
  }

  return (
    <div
      className="tab-pane fade show active"
      id="pills-listing"
      role="tabpanel"
    >
      {vendors.map((vendor: any) => (
        <div className="result-list mb-4" key={vendor.id}>
          <div className="row">
            
            {/* LEFT IMAGE */}
            <div className="col-md-4">
              <div className="img">
                {vendor.is_featured && (
                  <span className="featured">
                    <i className="fa fa-star"></i>
                    <span>Handpicked</span>
                  </span>
                )}

                <Link to={`/vendor/${vendor.slug}`}>
                  <img
                    src={vendor.image || "/placeholder.jpg"}
                    alt={vendor.name}
                    className="rounded w-100"
                  />
                </Link>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-md-8">
              <div className="content">
                
                {/* HEADER */}
                <div className="head">
                  <a href="#" className="favorite active">
                    <i className="fa fa-heart"></i>
                  </a>

                  <h3>
                    <Link to={`/vendor/${vendor.slug}`}>
                      {vendor.name}
                    </Link>
                  </h3>

                  <div className="rating">
                    <span className="stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className={
                            i < Math.floor(vendor.rating || 0)
                              ? "fa fa-star"
                              : "fa-regular fa-star"
                          }
                        ></i>
                      ))}
                    </span>
                    ({vendor.reviews_count || 0} review)
                  </div>
                </div>

                {/* LOCATION */}
                <p className="text-muted">
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  {vendor.location || "Location not available"}
                </p>

                {/* CATEGORY */}
                <p className="text-muted">
                  {vendor.category_name || "Photo + Video"}
                </p>

                {/* PRICE */}
                <h4 className="fw-bold">
                  <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                  {vendor.price
                    ? `${vendor.price} per day`
                    : "Price not available"}
                </h4>

                {/* BOTTOM */}
                <div className="bottom d-flex align-items-center gap-2 flex-wrap">
                  
                  {/* Average bookings */}
                  {vendor.average_bookings && (
                    <span className="badge border rounded p-2">
                      Average Bookings {vendor.average_bookings}
                    </span>
                  )}

                  {/* Hover more */}
                  <div className="hover-more">
                    <span className="badge border rounded p-2 more-btn">
                      + more...
                    </span>

                    <ul className="more-list">
                      {vendor.average_bookings && (
                        <li>Average Bookings {vendor.average_bookings}</li>
                      )}
                      {vendor.cities_count && (
                        <li>Shot In {vendor.cities_count} Cities</li>
                      )}
                      {vendor.on_time_service && (
                        <li>On Time Service {vendor.on_time_service} votes</li>
                      )}
                      {vendor.value_for_money && (
                        <li>Value for Money {vendor.value_for_money} votes</li>
                      )}
                    </ul>
                  </div>

                  {/* BUTTON */}
                  <Link
                    to={`/vendor/${vendor.slug}`}
                    className="btn btn-outline-primary btn-rounded"
                  >
                    Request Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* PAGINATION */}
      <div className="theme-pagination">
        <nav>
          <ul className="pagination">
            <li className="page-item disabled">
              <span className="page-link">
                <i className="fa fa-angle-left"></i>
              </span>
            </li>
            <li className="page-item active">
              <span className="page-link">1</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default VendorList;