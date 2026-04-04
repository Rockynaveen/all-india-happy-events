import React from "react";

const VendorSlider: React.FC = () => {
    return (
        <section className="vendor-single-slider">
            <div className="tab-content">

                {/* GALLERY */}
                <div className="tab-pane fade" id="pills-gallery">
                    <div className="single-img"></div>
                </div>

                {/* GRID */}
                <div className="tab-pane fade show active" id="pills-hr-grid">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/assets/images/vendors/slider_1.jpg" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <img src="/assets/images/vendors/slider_2.jpg" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <img src="/assets/images/vendors/slider_3.jpg" className="img-fluid" />
                        </div>
                    </div>
                </div>

                {/* STREET VIEW */}
                <div className="tab-pane fade" id="pills-streetview">
                    <iframe
                        src="https://www.google.com/maps?q=Hyderabad&output=embed"
                        width="100%"
                        height="450"
                        title="streetview"
                    ></iframe>
                </div>

                {/* VIDEO */}
                <div className="tab-pane fade" id="pills-video">
                    <iframe
                        src="https://www.youtube.com/embed/KJwDhHFMicc"
                        width="100%"
                        height="450"
                        title="video"
                    ></iframe>
                </div>

                {/* MAP */}
                <div className="tab-pane fade" id="pills-map">
                    <iframe
                        src="https://www.google.com/maps?q=Hyderabad&output=embed"
                        width="100%"
                        height="450"
                        title="map"
                    ></iframe>
                </div>

            </div>
        </section>
    );
};

export default VendorSlider;