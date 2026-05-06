import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCartStore } from "../store/cart-store";
import DatePicker from "react-datepicker";

import Calendar from "react-calendar";

const VendorDetailsPage = () => {
  const { slug } = useParams();
  const [vendor, setVendor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const addToCart = useCartStore((state) => state.addToCart);

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const res = await axios.get(
          `https://allhappyevents.jbservices.in/api/vendors/${slug}`
        );
        setVendor(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVendor();
  }, [slug]);

  if (loading) return <h2>Loading...</h2>;
  if (!vendor) return <h2>No vendor found</h2>;

  // ================= DATA =================
  const images = vendor.user_information?.portfolio_images || [];
  const heroImage = vendor.thumbnail || images[0];

  const bookedDates = vendor.events?.booked || [];
  const blockedDates = vendor.events?.blocked || [];

  // ================= ADD TO CART =================
  const handleAddToCart = () => {
    if (!selectedDate) {
      alert("Please select a date");
      return;
    }

    const formattedDate = selectedDate.toISOString().split("T")[0];

    // ❌ prevent booked dates
    const isBooked = bookedDates?.some(
      (b: any) => b.date === formattedDate
    );

    if (isBooked) {
      alert("This date is already booked");
      return;
    }

    const cartItem = {
      id: vendor.id,
      name: vendor.brand_name,
      city: vendor.address?.city,
      price: vendor.menus?.[0]?.price_per_plate || 0,
      date: formattedDate,
      image: vendor.thumbnail,
    };

    addToCart(cartItem);

    alert("Added to cart!");
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="vendor-single-slider">
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane show active" id="pills-hr-grid">
            <div className="owl-carousel owl-theme" id="slider-vendor-single">
              <div
                className="item"
                style={{
                  backgroundImage: `url(${heroImage})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROFILE ================= */}
      <div className="vendor-profile-single">
        <div className="container pos-rel">
          <div className="row align-items-end">
            <div className="col-lg-6 mb-0">
              <div className="profile-single">
                <h3>{vendor.brand_name}</h3>

                <p>
                  <i className="fa fa-map-marker"></i>{" "}
                  {vendor.address?.city}, {vendor.address?.state}
                </p>

                <div className="reviews">
                  <span className="badge">
                    <i className="fa fa-star-half-full"></i>{" "}
                    {vendor.rating || 0}
                  </span>{" "}
                  {vendor.total_reviews || 0} Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <section className="wide-tb-90 pt-5">
        <div className="container">
          <div className="row">

            {/* LEFT SIDE */}
            <div className="col-lg-8 col-md-12">

              {/* ================= GALLERY ================= */}
              <div className="card-shadow pos-rel">
                <a id="gallery" className="anchor-fake"></a>

                <div className="card-shadow-header">
                  <h3><i className="fa fa-image"></i> Gallery</h3>
                </div>

                <div className="card-shadow-body">
                  <div className="row vendor-img-gallery">
                    {images.map((img: string, i: number) => (
                      <div className="col-md-3 mb-0" key={i}>
                        <div className="vendor-gallery">
                          <a href={img}>
                            <img src={img} className="rounded" alt="" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ================= MENUS ================= */}
              <div className="card-shadow pos-rel mt-4">
                <div className="card-shadow-header">
                  <h3><i className="fa fa-cutlery"></i> Menus</h3>
                </div>

                <div className="card-shadow-body">
                  {vendor.menus?.length === 0 ? (
                    <p>No menus available</p>
                  ) : (
                    <ul className="list-unstyled icons-listing">
                      {vendor.menus.map((menu: any) => (
                        <li key={menu.id}>
                          {menu.name} - ₹{menu.price_per_plate}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* ================= FAQ ================= */}
              <div className="card-shadow pos-rel mt-4">
                <a id="faq" className="anchor-fake"></a>

                <div className="card-shadow-header">
                  <h3><i className="fa fa-question-circle"></i> Faq’s</h3>
                </div>

                <div className="card-shadow-body p-0">
                  <table className="table mb-0 table-faqs">
                    <tbody>
                      {vendor.answers?.length === 0 ? (
                        <tr>
                          <td>No FAQs available</td>
                        </tr>
                      ) : (
                        vendor.answers.map((faq: any) => (
                          <tr key={faq.id}>
                            <th>{faq.question}</th>
                            <td>
                              <span className="txt-orange">
                                {faq.answer?.join(", ")}
                              </span>
                            </td>
                            <td></td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ================= LOCATION ================= */}
              <div className="card-shadow pos-rel mt-4">
                <a id="location" className="anchor-fake"></a>

                <div className="card-shadow-header">
                  <h3>
                    <i className="fa fa-map-marker"></i> Location
                  </h3>
                </div>

                <div className="card-shadow-body">
                  <p>
                    {vendor.address?.address},{" "}
                    {vendor.address?.city},{" "}
                    {vendor.address?.state},{" "}
                    {vendor.address?.country}
                  </p>

                  <div id="map-holder">
                    <iframe
                      src={`https://www.google.com/maps?q=${vendor.address?.address},${vendor.address?.city}&output=embed`}
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-4 col-md-12">
              <aside className="row sidebar-widgets">
                <div className="sidebar-primary col-lg-12 col-md-6">
                  <div className="widget mb-5">

                    <div
                      className="availability-card"
                      style={{
                        background: "#fff",
                        borderRadius: "16px",
                        border: "1px solid #e5e7eb",
                        padding: "20px",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                      }}
                    >
                      <h3
                        className="title"
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: "#374151",
                          textTransform: "uppercase",
                          marginBottom: "16px",
                          margin: "0 0 16px 0",
                        }}
                      >
                        AVAILABILITY CHECK:
                      </h3>

                      <div className="calendar-wrapper">
                        <Calendar
                          value={selectedDate}
                          onChange={(value) => setSelectedDate(value as Date)}
                          minDate={new Date()}
                          formatDay={() => ""}
                          tileContent={({ date, view }) => {
                            if (view !== "month") return null;

                            const formattedDate = date.toISOString().split("T")[0];
                            const todayDate = new Date().toISOString().split("T")[0];

                            const isBooked = bookedDates?.some(
                              (b: any) => b.date === formattedDate
                            );
                            const isBlocked = blockedDates?.some(
                              (b: any) => b.date === formattedDate
                            );
                            const isSelected =
                              selectedDate?.toISOString().split("T")[0] === formattedDate;
                            const isToday = todayDate === formattedDate;

                            let background = "transparent";
                            let color = "#111827";
                            let border = "none";

                            if (isBooked) background = "#f9a8d4";
                            if (isBlocked) background = "#fef08a";
                            if (isSelected) {
                              background = "#ec4899";
                              color = "#ffffff";
                            }
                            if (isToday && !isSelected) {
                              border = "2px solid #ec4899";
                            }

                            return (
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: "32px",
                                  height: "32px",
                                  borderRadius: "50%",
                                  background,
                                  color,
                                  border,
                                  margin: "0 auto",
                                  fontSize: "13px",
                                  fontWeight: isSelected ? 700 : 400,
                                }}
                              >
                                {date.getDate()}
                              </span>
                            );
                          }}
                        />
                      </div>

                      <div
                        className="calendar-legend"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "16px",
                          marginTop: "16px",
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          color: "#4b5563",
                          textTransform: "uppercase",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span
                            className="dot booked-dot"
                            style={{
                              width: "12px",
                              height: "12px",
                              borderRadius: "50%",
                              background: "#f9a8d4",
                              display: "inline-block",
                              flexShrink: 0,
                            }}
                          />
                          BOOKED
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span
                            className="dot tentative-dot"
                            style={{
                              width: "12px",
                              height: "12px",
                              borderRadius: "50%",
                              background: "#fef08a",
                              display: "inline-block",
                              flexShrink: 0,
                            }}
                          />
                          TENTATIVE
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span
                            className="dot selected-dot"
                            style={{
                              width: "12px",
                              height: "12px",
                              borderRadius: "50%",
                              background: "#ec4899",
                              display: "inline-block",
                              flexShrink: 0,
                            }}
                          />
                          SELECTED
                        </div>
                      </div>

                      <button
                        className="add-to-cart-btn"
                        onClick={handleAddToCart}
                        style={{
                          width: "100%",
                          marginTop: "20px",
                          padding: "14px",
                          background: "#ec4899",
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: "13px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          border: "none",
                          borderRadius: "999px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 7h12.8M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"
                          />
                        </svg>
                        ADD TO CART
                      </button>
                    </div>

                  </div>
                </div>
              </aside>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default VendorDetailsPage;