import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VendorDetailsPage = () => {
  const { slug } = useParams();
  const [vendor, setVendor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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

  // ================= CALENDAR =================
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const days = Array.from(
    { length: new Date(year, month + 1, 0).getDate() },
    (_, i) => i + 1
  );

  const formatDate = (day: number) => {
    const d = new Date(year, month, day);
    return d.toISOString().split("T")[0];
  };

  const getClass = (day: number) => {
    const d = formatDate(day);

    if (bookedDates.some((b: any) => b.date === d)) return "booked";
    if (blockedDates.some((b: any) => b.date === d)) return "blocked";

    return "";
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
                    <div
                      id="map_extended"
                      className="vendor-single-popup-wrap"
                    >
                      <iframe
                        src={`https://www.google.com/maps?q=${vendor.address?.address},${vendor.address?.city}&output=embed`}
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-4 col-md-12">
              <aside className="row sidebar-widgets">
                <div className="sidebar-primary col-lg-12 col-md-6">

                  {/* ================= CALENDAR ================= */}
                  <div className="widget mb-5">
                    <h3 className="widget-title">Availability</h3>

                    <div className="datepicker-inline">
                      <div className="calendar-grid">
                        {days.map((day) => (
                          <div
                            key={day}
                            className={`calendar-day ${getClass(day)}`}
                          >
                            {day}
                          </div>
                        ))}
                      </div>
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