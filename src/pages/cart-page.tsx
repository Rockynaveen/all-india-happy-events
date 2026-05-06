import { useCartStore } from "../store/cart-store";
import { placeOrder } from "../services/order-service";
import { useState } from "react";

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [loading, setLoading] = useState(false);
  const [paymentType, setPaymentType] = useState<"advance" | "full">("full");
  const [advanceAmount, setAdvanceAmount] = useState<number>(0);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = async () => {
    try {
      setLoading(true);

      if (paymentType === "advance" && (!advanceAmount || advanceAmount <= 0)) {
        alert("Please enter a valid advance amount.");
        return;
      }

      console.log("Cart before order:", cart);
      console.log("Payment type:", paymentType);
      console.log("Advance amount:", advanceAmount);

      const res = await placeOrder(paymentType, advanceAmount);

      console.log("ORDER SUCCESS:", res);

      clearCart();

      alert("Order placed successfully!");

      window.location.href = "/orders";

    } catch (err: any) {
      const status = err?.response?.status;
      const msg =
        err?.response?.data?.message ||
        JSON.stringify(err?.response?.data) ||
        err?.message ||
        "Unknown error";

      console.error("ORDER FAILED — Status:", status);
      console.error("ORDER FAILED — Response:", err?.response?.data);

      alert(`Order failed (${status ?? "Network Error"}): ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 mb-5 py-5">
      <h2 className="mb-4 my-3">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center py-5">
          <i className="fa fa-shopping-cart fa-3x text-muted mb-3"></i>
          <p className="text-muted">No items in cart.</p>
          <a href="/vendors" className="btn btn-default mt-2">
            Browse Vendors
          </a>
        </div>
      ) : (
        <div className="row">

          {/* ── Left: Cart Items ── */}
          <div className="col-lg-8">
            {cart.map((item, index) => (
              <div className="card p-3 mb-3" key={index}>
                <div className="d-flex gap-3 align-items-center">

                  <img
                    src={item.image || "/assets/images/default-vendor.png"}
                    alt={item.name}
                    width="90"
                    height="90"
                    style={{
                      objectFit: "cover",
                      borderRadius: "8px",
                      flexShrink: 0,
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-1">
                      <strong>₹ {Number(item.price).toLocaleString("en-IN")}</strong>
                    </p>
                    <p className="mb-0 text-muted" style={{ fontSize: "13px" }}>
                      <i className="fa fa-calendar me-1"></i>
                      Event Date: <strong>{item.date}</strong>
                    </p>
                  </div>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(index)}
                  >
                    <i className="fa fa-trash"></i> Remove
                  </button>

                </div>
              </div>
            ))}
          </div>

          {/* ── Right: Summary + Payment ── */}
          <div className="col-lg-4">

            {/* Order Summary */}
            <div className="card p-3 mb-3">
              <h5 className="mb-3">Order Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Total Items</span>
                <strong>{cart.length}</strong>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Total Price</span>
                <strong>₹ {Number(totalPrice).toLocaleString("en-IN")}</strong>
              </div>

              {paymentType === "advance" && advanceAmount > 0 && (
                <>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Advance</span>
                    <strong className="text-success">
                      ₹ {Number(advanceAmount).toLocaleString("en-IN")}
                    </strong>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Remaining</span>
                    <strong className="text-danger">
                      ₹ {Number(totalPrice - advanceAmount).toLocaleString("en-IN")}
                    </strong>
                  </div>
                </>
              )}
            </div>

            {/* Payment Type */}
            <div className="card p-3 mb-3">
              <h5 className="mb-3">Payment Type</h5>

              <div className="d-flex gap-4 mb-3">
                <label style={{ cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="payment_type"
                    value="full"
                    checked={paymentType === "full"}
                    onChange={() => {
                      setPaymentType("full");
                      setAdvanceAmount(0);
                    }}
                  />{" "}
                  Full Payment
                </label>

                <label style={{ cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="payment_type"
                    value="advance"
                    checked={paymentType === "advance"}
                    onChange={() => setPaymentType("advance")}
                  />{" "}
                  Advance
                </label>
              </div>

              {paymentType === "advance" && (
                <div>
                  <label className="form-label text-muted" style={{ fontSize: "13px" }}>
                    Advance Amount (₹)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter advance amount"
                    value={advanceAmount || ""}
                    min={1}
                    max={totalPrice}
                    onChange={(e) => setAdvanceAmount(Number(e.target.value))}
                  />
                  {advanceAmount > totalPrice && (
                    <small className="text-danger">
                      Advance cannot exceed total price.
                    </small>
                  )}
                </div>
              )}
            </div>

            {/* Place Order Button */}
            <button
              className="btn btn-success w-100"
              onClick={handleOrder}
              disabled={
                loading ||
                (paymentType === "advance" &&
                  (!advanceAmount ||
                    advanceAmount <= 0 ||
                    advanceAmount > totalPrice))
              }
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Placing Order...
                </>
              ) : (
                <>
                  <i className="fa fa-check-circle me-2"></i>
                  Place Order
                </>
              )}
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;