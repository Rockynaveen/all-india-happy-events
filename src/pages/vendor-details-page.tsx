import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useVendor } from "../hooks/use-vendor";
import "../assets/css/style.css";

const VendorDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useVendor(slug!);

  if (isLoading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center mt-5">Error loading vendor</p>;

  const vendor = data;

  return (
    <>
      <Header />

      <div className="vendor-details-container">

        {/* IMAGE */}
        <div className="vendor-banner">
          <img
            src={vendor.thumbnail}
            alt={vendor.brand_name}
          />
        </div>

        {/* CONTENT */}
        <div className="vendor-details-content">

          {/* LEFT SIDE */}
          <div className="vendor-left">

            <h1 className="vendor-title">
              {vendor.brand_name}
            </h1>

            <p className="vendor-location">
              {vendor.address?.city_id}, {vendor.address?.state_id}
            </p>

            <div className="vendor-rating">
              ★ {vendor.rating} ({vendor.total_reviews} reviews)
            </div>

            <hr />

            {/* MENUS */}
            <h3 className="section-title">Menus</h3>

            {vendor.menus?.length > 0 ? (
              <div className="menu-list">
                {vendor.menus.map((menu: any) => (
                  <div key={menu.id} className="menu-item">
                    <span>{menu.name}</span>
                    <span>₹{menu.price_per_plate}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-data">No menu available</p>
            )}

          </div>

          {/* RIGHT SIDE */}
          <div className="vendor-right">

            <div className="price-box">
              <p className="price-label">Starting Price</p>
              <h2 className="price">
                ₹{Number(vendor.per_day_price).toLocaleString()}
              </h2>
              <span className="per-day">per day</span>

              <button className="contact-btn">
                Contact Vendor
              </button>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default VendorDetailsPage;