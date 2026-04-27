import { Link } from "react-router-dom";
import "../../assets/css/style.css";

const VendorCard = ({ vendor }: any) => {
  return (
    <Link to={`/vendors/${vendor.slug}`} className="vendor-link">
      <div className="vendor-card">

        {/* IMAGE */}
        <div className="vendor-image">
          <img
            src={vendor.thumbnail}
            alt={vendor.brand_name}
          />
        </div>

        {/* CONTENT */}
        <div className="vendor-body">

          {/* TITLE */}
          <h3 className="vendor-name">
            {vendor.brand_name}
          </h3>

          {/* LOCATION */}
          <p className="vendor-location">
            {vendor.address?.city_id}, {vendor.address?.state_id}
          </p>

          {/* FOOTER */}
          <div className="vendor-footer">

            {/* PRICE */}
            <span className="vendor-price">
              ₹{Number(vendor.per_day_price).toLocaleString()}
            </span>

            {/* RATING */}
            <span className="vendor-rating">
              ★ {vendor.rating} ({vendor.total_reviews})
            </span>

          </div>

        </div>
      </div>
    </Link>
  );
};

export default VendorCard;