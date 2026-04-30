import { Link } from "react-router-dom";

const VendorsImagesTab = ({ vendors }: any) => {
  if (!vendors || vendors.length === 0) {
    return <p className="text-center py-5">No vendors found</p>;
  }

  return (
    <div
      className="tab-pane fade"
      id="pills-images"
      role="tabpanel"
      aria-labelledby="pills-images-tab"
    >
      <div className="row">
        {vendors.map((vendor: any) => {
          const city = vendor?.address?.city_id || "";
          const state = vendor?.address?.state_id || "";

          return (
            <div className="col-lg-6 col-md-6" key={vendor.id}>
              <div className="wedding-listing">
                <div className="img">
                  <Link to={`/vendor/${vendor.slug}`}>
                    <img
                      src={vendor.thumbnail}
                      alt={vendor.brand_name}
                    />
                  </Link>

                  <div className="img-content">
                    <div className="top">
                      {vendor.is_premium && (
                        <span className="featured">
                          <i className="fa fa-star"></i>
                          <span>Handpicked</span>
                        </span>
                      )}

                      <span className="price">
                        <i className="fa fa-tag"></i>
                        <span>
                          ₹{Number(vendor.per_day_price).toLocaleString()}
                        </span>
                      </span>
                    </div>

                    <div className="bottom">
                      <a className="tags" href="#">
                        Photo + Video
                      </a>

                      <a className="favorite" href="#">
                        <i className="fa fa-heart-o"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="content">
                  <div className="gap">
                    <h3>
                      <Link to={`/vendor/${vendor.slug}`}>
                        {vendor.brand_name}
                        <span className="verified">
                          <i className="fa fa-check-circle"></i>
                        </span>
                      </Link>
                    </h3>

                    <div>
                      <i className="fa fa-map-marker"></i>{" "}
                      {city}, {state}, India
                    </div>
                  </div>

                  <div className="reviews">
                    <span className="stars">
                      {[1, 2, 3, 4, 5].map((star) => {
                        if (vendor.rating >= star) {
                          return (
                            <i key={star} className="fa fa-star"></i>
                          );
                        } else if (vendor.rating >= star - 0.5) {
                          return (
                            <i
                              key={star}
                              className="fa fa-star-half-stroke"
                            ></i>
                          );
                        } else {
                          return (
                            <i
                              key={star}
                              className="fa fa-regular fa-star"
                            ></i>
                          );
                        }
                      })}
                    </span>
                    ({vendor.total_reviews} review)
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="theme-pagination">
        <nav>
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#">
                <i className="fa fa-angle-left"></i>
              </a>
            </li>

            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>

            <li className="page-item disabled">
              <a className="page-link" href="#">
                <i className="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default VendorsImagesTab;