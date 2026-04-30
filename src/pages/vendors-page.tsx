import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/style.css";

const VendorsPage = () => {
  const [vendors, setVendors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await axios.get(
          "https://allhappyevents.jbservices.in/api/vendors"
        );

        setVendors(res?.data?.data?.vendors || []);
      } catch (error) {
        console.error("API Error:", error);
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
    <div className="container tab-pane fade show active my-5" id="pills-images ">

      <div className=" row">

        {vendors.map((vendor: any) => (
          <div className="col-lg-6 col-md-6" key={vendor.id}>
            <div className="wedding-listing">

              {/* IMAGE SECTION */}
              <div className="img">

                <a href={`/vendors/${vendor.slug}`}>
                  <img src={vendor.thumbnail} alt={vendor.brand_name} />
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
                        ₹{Number(vendor.per_day_price).toLocaleString("en-IN")}
                      </span>
                    </span>

                  </div>

                  <div className="bottom">

                    <a className="tags" href={`/vendors/${vendor.slug}`}>
                      {vendor.menus?.length > 0
                        ? vendor.menus.map((m: any) => m.name).join(" + ")
                        : "Photo + Video"}
                    </a>

                    <a className="favorite" href="javascript:void(0)">
                      <i className="fa fa-heart-o"></i>
                    </a>

                  </div>

                </div>

              </div>

              {/* CONTENT */}
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
                    {vendor.address?.city_id}, {vendor.address?.state_id}
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
  );
};

export default VendorsPage;