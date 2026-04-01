import React from "react";

const PhotographerTabs = () => {
    return (
        <section className="wide-tb-90 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">

                        {/* Tabs */}
                        <ul
                            className="nav nav-pills mb-3 horizontal-tab-second justify-content-center nav-fill"
                            role="tablist"
                        >
                            <li className="nav-item">
                                <button
                                    className="nav-link active"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-hr-general"
                                >
                                    Find a Photographer
                                </button>
                            </li>

                            <li className="nav-item">
                                <button
                                    className="nav-link"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-hr-vendor"
                                >
                                    Photographer FAQs
                                </button>
                            </li>
                        </ul>

                        {/* Tab Content */}
                        <div className="tab-content">

                            {/* TAB 1 */}
                            <div className="tab-pane fade show active" id="pills-hr-general">
                                <h3 className="mt-5 mb-4 fw-7 text-center">
                                    Wedding Photography Services & Tips
                                </h3>

                                <div className="accordion" id="accordionExample">

                                    {/* Item 1 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                            >
                                                What all services provided by wedding photographers?
                                            </button>
                                        </h2>

                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse show"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Traditional Photography</li>
                                                    <li>Candid Photography</li>
                                                    <li>Videography</li>
                                                    <li>Drone Photography</li>
                                                    <li>Albums</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                            >
                                                Why hire a professional photographer?
                                            </button>
                                        </h2>

                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                Professionals capture emotions and moments beautifully.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                            >
                                                How to find photographer within budget?
                                            </button>
                                        </h2>

                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                Use filters like city, budget and reviews.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* TAB 2 */}
                            <div className="tab-pane fade" id="pills-hr-vendor">
                                <h3 className="mt-5 mb-4 fw-7 text-center">
                                    Photographer Questions Might You Have
                                </h3>

                                <div className="accordion" id="accordionVendor">

                                    {/* Item 1 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOneVendor"
                                            >
                                                How do I find top-rated photographers?
                                            </button>
                                        </h2>

                                        <div
                                            id="collapseOneVendor"
                                            className="accordion-collapse collapse show"
                                            data-bs-parent="#accordionVendor"
                                        >
                                            <div className="accordion-body">
                                                Compare ratings, pricing and reviews online.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwoVendor"
                                            >
                                                How can I find a photographer near me?
                                            </button>
                                        </h2>

                                        <div
                                            id="collapseTwoVendor"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionVendor"
                                        >
                                            <div className="accordion-body">
                                                Use location filters to search nearby photographers.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotographerTabs;