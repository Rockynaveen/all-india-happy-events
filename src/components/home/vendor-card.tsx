import { useState } from "react";
import { useCartStore } from "../../store/cart-store";

const VendorCard = ({ vendor }: any) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="card p-3 mb-3">

      <h5>{vendor.brand_name}</h5>
      <p>₹ {vendor.per_day_price}</p>

      {/* DATE */}
      <input
        type="date"
        className="form-control mb-2"
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      {/* ADD TO CART */}
      <button
        className="btn btn-primary"
        onClick={() => {
          if (!selectedDate) {
            alert("Select date first");
            return;
          }

          addToCart({
            id: vendor.id,
            name: vendor.brand_name,
            price: vendor.per_day_price,
            date: selectedDate,
            image: vendor.thumbnail,
          });
        }}
      >
        Add to Cart
      </button>

    </div>
  );
};

export default VendorCard;