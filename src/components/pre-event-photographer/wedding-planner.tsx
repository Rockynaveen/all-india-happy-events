import React from "react";

const WeddingContactModern = () => {
    return (
        <section className="wedding-contact-modern">
            <div className="container">

                {/* Main Header */}
                <div className="intro-box">
                    <h2>Our Personal Wedding Planner</h2>

                    <p className="desc">
                        Explore inspiration, compare vendors, plan events, and craft the unforgettable celebration you dream of.
                    </p>
                </div>

                <div className="content-grid">

                    {/* CARD 1 */}
                    <div className="info-card">
                        <h3>Talk To Our Team</h3>
                        <p>Need help or guidance? Get in touch with us anytime.</p>

                        <div className="contact-dual">
                            <div>
                                <h4>
                                    <i className="fa-solid fa-envelope"></i> Vendors
                                </h4>
                                <p>vendors@gmail.com</p>
                                <p>+91 90000 00001</p>
                            </div>

                            <div>
                                <h4>
                                    <i className="fa-solid fa-envelope"></i> Users
                                </h4>
                                <p>support@gmail.com</p>
                                <p>+91 90000 00002</p>
                            </div>
                        </div>

                        <button className="talk-btn">Request a Call Back</button>
                    </div>

                    {/* CARD 2 */}
                    <div className="info-card">
                        <h3>Find Our Office</h3>
                        <p className="address">
                            Visit us for consultations, demos & assistance.
                        </p>

                        <div className="map-block">
                            <i className="fa-solid fa-location-dot"></i> India, Hyderabad, Kavadiguda
                            <br />
                            100ft Road, Gandhi Nagar
                            <br />
                            500080
                        </div>

                        <button className="map-btn">View on Map</button>
                    </div>

                    {/* CARD 3 */}
                    <div className="info-card">
                        <h3>Stay Updated</h3>
                        <p>Get wedding ideas, tips & inspiration via email.</p>

                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="subscribe-email"
                        />
                        <button className="sub-line-btn">Subscribe</button>
                    </div>

                    {/* CARD 4 */}
                    <div className="info-card">
                        <h3>Grow With Us</h3>
                        <p>Join as a vendor & reach thousands of couples.</p>

                        <button className="cta-btn">Register as Vendor</button>

                        <div className="social-icons">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WeddingContactModern;