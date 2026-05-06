import { useEffect, useState } from "react";
import "../assets/css/style.css";
import { getVendors } from "../services/vendor-service";
import type { Vendor } from "../services/vendor-service";
import { getPopularCategories } from "../services/category-service";
import type { PopularCategory } from "../services/category-service";
import { getCities } from "../services/city-service";
import type { City } from "../services/city-service";

const VendorsPage = ({ showHomeTitle = false }) => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [categories, setCategories] = useState<PopularCategory[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [filters, setFilters] = useState<{
    category_slug?: string;
    sub_category_slug?: string;
    city_id?: number;
    is_premium?: boolean;
    rating?: number;
    min_price?: number;
    max_price?: number;
    event_date?: string;
    page?: number;
  }>({
    page: 1,
  });


  const [loading, setLoading] = useState(true);
  const buildQuery = (filters: any) => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        params.append(key, String(value));
      }
    });

    return `/vendors?${params.toString()}`;
  };
  const fetchVendors = async () => {
    try {
      const query = buildQuery(filters);

      const res = await api.get(query);

      setVendors(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (error) {
      console.error("Error fetching vendors", error);
    }
  };

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const data = await getVendors();
        setVendors(data);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const data = await getPopularCategories();
        setCategories(data);
      } catch (error) {
        console.error("Category API Error:", error);
      }
    };

    const fetchCities = async () => {
      try {
        const res = await getCities();
        console.log("FULL RESPONSE:", res);
        setCities(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVendors();
    fetchCategories();
    fetchCities();
    
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading vendors...</div>;
  }

  return (
    <>
      <section className="search-result-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto mb-5">
              <h1>Find the Perfect Wedding Photographer</h1>
              <p className="lead">Search over 360,000 Photographers with reviews, pricing, availability and more</p>
              <div className="input-group">
                <input type="text" aria-label="First name" className="form-control form-light"
                  placeholder="Search Wedding Photographers" />
                <input type="text" aria-label="Last name" className="form-control form-light left-border"
                  placeholder="Search Wedding Location" />
                <div className="input-group-prepend">
                  <button type="submit" className="btn btn-default">Search Now</button>
                </div>
              </div>
            </div>
          </div>


          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html"><i className="fa fa-home"></i></a></li>
              <li className="breadcrumb-item">Vendors</li>
              <li className="breadcrumb-item active" aria-current="page">Wedding Photographers</li>
            </ol>
          </nav>

        </div>
      </section>
      {showHomeTitle && (
        <div className="section-title text-center">
          <h1>Top Wedding Vendors</h1>
          <p>Handpicked professionals trusted by thousands of Indian couples</p>
        </div>
      )}

      <div className="container ">
        <div className="row">

          {/* ============== LEFT SIDEBAR (4 COL) ========== */}
          <div className="col-lg-4">

            <div className="widget search-result-toggle my-5">
              <a data-toggle="collapse" href="#categories" className="link">
                <h3 className="widget-title px-2">
                  Categories <i className="fa fa-angle-up"></i>
                </h3>
              </a>

              <div className="collapse show" id="categories">
                <div className="inner">
                  <ul className="list-unstyled px-2">
                    {categories?.length > 0 ? (
                      categories.map((cat) => (
                        <li key={cat.id}>
                          <label>
                            <input type="radio" name="category" value={cat.id} />
                            {cat.name}
                          </label>
                        </li>
                      ))
                    ) : (
                      <li>No categories found</li>
                    )}
                  </ul>

                </div>
              </div>
            </div>

            <div className="widget search-result-toggle ">
              <a data-toggle="collapse" href="#locations" className="link">
                <h3 className="widget-title px-2">
                  Locations <i className="fa fa-angle-up"></i>
                </h3>
              </a>

              <div className="collapse show" id="locations">
                <div className="inner">
                  <ul className="list-unstyled px-2">
                    {Array.isArray(cities) && cities.length > 0 ? (
                      cities.map((city) => (
                        <li key={city.id}>
                          <label>
                            <input type="radio" name="location" value={city.id} />
                            {city.name}
                          </label>
                        </li>
                      ))
                    ) : (
                      <li>No locations found</li>
                    )}
                  </ul>

                </div>
              </div>
            </div>

            <div className="widget  px-2">
              <h4>Price Range</h4>

              <div className="d-flex gap-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Min Price"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilters((prev) => ({
                      ...prev,
                      min_price: value ? Number(value) : undefined,
                    }));
                  }}
                />

                <input
                  type="number"
                  className="form-control"
                  placeholder="Max Price"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilters((prev) => ({
                      ...prev,
                      max_price: value ? Number(value) : undefined,
                    }));
                  }}
                />
              </div>
            </div>

            <div className="widget search-result-toggle mt-4">
              <a data-toggle="collapse" href="#settings" className="link">
                <h3 className="widget-title px-2">
                  Rating <i className="fa fa-angle-up"></i>
                </h3>
              </a>

              <div className="collapse show" id="settings">
                <div className="inner px-2">
                  <ul className="list-unstyled">

                    <li>
                      <label>
                        <input
                          type="radio"
                          name="rating_filter"
                          onChange={() =>
                            setFilters((prev) => ({
                              ...prev,
                              rating: undefined,
                            }))
                          }
                        />
                        All Ratings
                      </label>
                    </li>

                    <li>
                      <label>
                        <input
                          type="radio"
                          name="rating_filter"
                          onChange={() =>
                            setFilters((prev) => ({
                              ...prev,
                              rating: 4,
                            }))
                          }
                        />
                        4+
                      </label>
                    </li>

                    <li>
                      <label>
                        <input
                          type="radio"
                          name="rating_filter"
                          onChange={() =>
                            setFilters((prev) => ({
                              ...prev,
                              rating: 4.5,
                            }))
                          }
                        />
                        4.5+
                      </label>
                    </li>

                    <li>
                      <label>
                        <input
                          type="radio"
                          name="rating_filter"
                          onChange={() =>
                            setFilters((prev) => ({
                              ...prev,
                              rating: 4.8,
                            }))
                          }
                        />
                        4.8+
                      </label>
                    </li>

                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* ============== RIGHT CONTENT (8 COL) ========== */}
          <div className="col-lg-8 my-5">

            <div className="row">

              {vendors.map((vendor) => (
                <div className="col-md-6 mb-4" key={vendor.id}>
                  <div className="wedding-listing">

                    <div className="img">
                      <a href={`/vendors/${vendor.slug}`}>
                        <img
                          src={
                            vendor.thumbnail ||
                            "/assets/images/default-vendor.png"
                          }
                          alt={vendor.brand_name}
                        />
                      </a>

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
                              ₹
                              {Number(vendor.per_day_price).toLocaleString("en-IN")}
                            </span>
                          </span>
                        </div>

                        <div className="bottom">
                          <a className="tags" href={`/vendors/${vendor.slug}`}>
                            {vendor.menus?.length > 0
                              ? vendor.menus.map((m) => m.name).join(" + ")
                              : "Photo + Video"}
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
                          <a href={`/vendors/${vendor.slug}`}>
                            {vendor.brand_name}
                            <span className="verified">
                              <i className="fa fa-check-circle"></i>
                            </span>
                          </a>
                        </h3>

                        <div>
                          <i className="fa fa-map-marker"></i>{" "}
                          {vendor.address?.city_id},{" "}
                          {vendor.address?.state_id}
                        </div>
                      </div>

                      <div className="reviews">
                        <span className="stars">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <i
                              key={i}
                              className={
                                i < vendor.rating
                                  ? "fa fa-star"
                                  : "fa-regular fa-star"
                              }
                            />
                          ))}
                        </span>

                        ({vendor.total_reviews} review)
                      </div>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default VendorsPage;