import axiosWeb from "../api/axios"; // ← match your actual export name
import { useCartStore } from "../store/cart-store";

export const placeOrder = async (
  paymentType: "advance" | "full",
  advanceAmount?: number
) => {
  const cart = useCartStore.getState().cart;
  if (!cart.length) throw new Error("Cart is empty");

  const token = localStorage.getItem("token"); // ← verify this key matches your login save
  console.log("TOKEN:", token); // check in browser console

  const items = cart.map((item) => ({
    vendor_id: item.id,
    event_date: item.date,
    per_day_price: item.price,
  }));

  const total_price = cart.reduce((sum, item) => sum + item.price, 0);

  const payload = {
    total_price,
    payment_type: paymentType,
    advance_amount: paymentType === "advance" ? (advanceAmount ?? 0) : total_price,
    items,
    vendor_meetings: [], // remove this field entirely if API rejects empty array
  };

  console.log("PAYLOAD BEING SENT:", JSON.stringify(payload, null, 2)); // verify in console

  const res = await axiosWeb.post("/orders", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return res.data;
};