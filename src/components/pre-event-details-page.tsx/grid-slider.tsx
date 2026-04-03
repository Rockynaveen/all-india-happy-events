const GridSliderTab = () => {
    return (
        <div className="tab-pane show active" id="pills-hr-grid">
            <div className="owl-carousel owl-theme" id="slider-vendor-single">

                <div
                    className="item"
                    style={{ backgroundImage: "url(/assets/images/vendors/slider_2.jpg)" }}
                ></div>

                <div
                    className="item"
                    style={{ backgroundImage: "url(/assets/images/vendors/slider_1.jpg)" }}
                ></div>

                <div
                    className="item"
                    style={{ backgroundImage: "url(/assets/images/vendors/slider_3.jpg)" }}
                ></div>

            </div>
        </div>
    );
};

export default GridSliderTab;