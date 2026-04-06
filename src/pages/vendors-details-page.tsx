import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import LocationSection from "../components/pre-event-details-page/location-section";
import VideoSection from "../components/pre-event-details-page/video-card";
import GallerySection from "../components/pre-event-details-page/gallery-section";
import AmenitiesSection from "../components/pre-event-details-page/amenitie-section";
import DescriptionSection from "../components/pre-event-details-page/description";
import VendorForm from "../components/pre-event-details-page/form-section";
import Availability from "../components/pre-event-details-page/date-picker";
import Categories from "../components/pre-event-details-page/categoriesss";
import Statistics from "../components/pre-event-details-page/statistics";
import WorkingHours from "../data/pre-event-photographer/pre-event-details/working-hours";
import AuthorProfile from "../components/pre-event-details-page/author";
import { authorProfileData } from "../data/pre-event-photographer/pre-event-details/author-data";
import FeaturedListing from "../components/pre-event-details-page/featured-list";
import { featuredListingsData } from "../data/pre-event-photographer/pre-event-details/featured-data";
import VendorNav from "../components/pre-event-details-page/nav-section";
import ReviewHeader from "../components/pre-event-details-page/review-header";
import ReviewSummary from "../components/pre-event-details-page/review-summary";
import ReviewSortBar from "../components/pre-event-details-page/review-sortbar";
import ReviewsSection from "../components/pre-event-details-page/reviews-section";
import ReviewForm from "../components/pre-event-details-page/review-form";
import FaqSection from "../components/pre-event-details-page/faq-section";

import VendorProfile from "../components/pre-event-details-page/vendor-profile";
import VendorContent from "../components/pre-event-details-page/vendor-content";

const VendorsDetailsPage = () => {

    // ✅ CONTROL TAB STATE
    const [activeTab, setActiveTab] = useState("slider");

    return (
        <div>
            <Header />

            <div className="vendor-profile-single">

                                    <VendorContent activeTab={activeTab} />

                    <VendorProfile 
                        activeTab={activeTab} 
                        setActiveTab={setActiveTab} 
                    />


            </div>

            <VendorNav />

            <section className="vendor-details py-5">
                <div className="container">
                    <div className="row">

                        {/* LEFT SIDE */}
                        <div className="col-lg-8">
                            <DescriptionSection />
                            <AmenitiesSection />
                            <GallerySection />
                            <VideoSection />
                            <ReviewHeader />
                            <ReviewSummary />
                            <ReviewSortBar />
                            <ReviewsSection />
                            <ReviewForm />
                            <FaqSection />
                            <LocationSection />
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-lg-4">
                            <VendorForm />
                            <Availability />
                            <Categories />
                            <Statistics />
                            <WorkingHours />
                            <AuthorProfile data={authorProfileData} />
                            <FeaturedListing data={featuredListingsData} />
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default VendorsDetailsPage;