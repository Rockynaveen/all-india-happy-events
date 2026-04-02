import SearchResultHeader from "../components/pre-event-photographer/search-header";
import Header from "../components/header";
import Footer from "../components/footer";
import PopularServices from "../components/pre-event-photographer/popular-services";
import PlannerSection from "../components/pre-event-photographer/contact-section";

// FAQ
import PhotographerTabs from "../components/pre-event-photographer/faq-tabs";
// Vendors
import VendorImageSection from "../components/pre-event-photographer/image-section";
import { vendors } from "../data/pre-event-photographer/image-data";

// Filters
import FilterSection from "../components/pre-event-photographer/filter-section";
import { filterData } from "../data/pre-event-photographer/filter-data";

const PreEventPhotographers = (): JSX.Element => {
    return (
        <>
            <Header />
            <SearchResultHeader />

            {/* MAIN SECTION */}
            <section className="wide-tb-90 bg-light">
                <div className="container">
                    <div className="row">

                        {/* LEFT FILTER */}
                        <div className="col-lg-4">
                            <FilterSection filters={filterData} />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="col-lg-8">

                            {/* RESULT HEADER */}
                            <div className="result-count">
                                <strong>244 results:</strong>

                                <ul className="nav nav-pills theme-tabbing list-style-map">
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            <i className="fa fa-list-ul"></i> List
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active">
                                            <i className="fa fa-th-large"></i> Images
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* VENDORS */}
                            <VendorImageSection vendors={vendors} />

                        </div>

                    </div>
                </div>
            </section>
            <PhotographerTabs />
            <PopularServices />
            <PlannerSection />
            <Footer />
        </>
    );
};

export default PreEventPhotographers;