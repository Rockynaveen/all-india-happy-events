import { useEffect, useState } from "react";
import "../assets/css/style.css";

const VendorsPage = () => {
  const [vendors, setVendors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await fetch(
          "https://allhappyevents.jbservices.in/api/vendors"
        );
        const json = await res.json();
        setVendors(json?.data?.vendors || []);
      } catch (err) {
        console.error("Error fetching vendors:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading vendors...</div>;
  }

  return (
    <>

      <main id="body-content">

        <section className="wide-tb-90">
          <div className="container">

            <div
              className="tab-content theme-tabbing search-result-tabbing"
              id="pills-tabContent"
            >

              <div
                className="tab-pane fade active show"
                id="pills-listing"
                role="tabpanel"
                aria-labelledby="pills-listing-tab"
              >

                {vendors.map((vendor: any) => (
                  <div className="result-list" key={vendor.id}>
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

                          <a href={`/vendors/${vendor.slug}`}>
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

                            {/* <a href="#" className="favorite color-white active">
                              <i className="fa fa-heart"></i>
                            </a> */}

                            <h3>
                              <a href={`/vendors/${vendor.slug}`}>
                                {vendor.brand_name}
                              </a>
                            </h3>

                            {/* RATING */}
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

                          {/* SERVICES */}
                          <p className="text-muted">
                            {vendor.menus?.length > 0
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

                            {/* REMOVED FAKE DATA - CLEAN UI */}
                            <a href="#">
                              <span className="badge border bg-primary rounded p-2">
                                {vendor.total_reviews} Reviews
                              </span>
                            </a>

                            <div className="hover-more">
                              <a href="#">
                                <span className="badge border rounded p-2 more-btn bg-primary">
                                  {vendor.menus?.length || 1} Services
                                </span>
                              </a>

                              <ul className="more-list">
                                <li>Based on customer reviews</li>
                                <li>Verified Vendor</li>
                                <li>Active in platform</li>
                              </ul>
                            </div>

                            <a
                              href={`/vendors/${vendor.slug}`}
                              className="btn btn-outline-primary bg-primary text-white btn-rounded"
                            >
                              View Details
                            </a>

                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

      </main>

    </>
  );
};

export default VendorsPage;