import Footer from "../components/footer";
import Header from "../components/header";
import LocationSection from "../components/pre-event-details-page.tsx/location-section";

import ReviewSection from "../components/pre-event-details-page.tsx/review-section";
import ReviewsSection from "../components/pre-event-details-page.tsx/review-item-section";
import VideoSection from "../components/pre-event-details-page.tsx/video-card";
import GallerySection from "../components/pre-event-details-page.tsx/gallery-section";
import AmenitiesSection from "../components/pre-event-details-page.tsx/amenitie-section";
import DescriptionSection from "../components/pre-event-details-page.tsx/description";
import VendorForm from "../components/pre-event-details-page.tsx/form-section";
import Availability from "../components/pre-event-details-page.tsx/date-picker";
import Categories from "../components/pre-event-details-page.tsx/categoriesss";
import Statistics from "../components/pre-event-details-page.tsx/statistics";
import WorkingHours from "../data/pre-event-photographer/pre-event-details/working-hours";
import AuthorProfile from "../components/pre-event-details-page.tsx/author";
import { authorProfileData } from "../data/pre-event-photographer/pre-event-details/author-data";
import FeaturedListing from "../components/pre-event-details-page.tsx/featured-list";
import { featuredListingsData } from "../data/pre-event-photographer/pre-event-details/featured-data";
import { reviewsData } from "../data/pre-event-photographer/pre-event-details/review-list-data";
import VendorNav from "../components/pre-event-details-page.tsx/nav-section";
import VendorProfileHeader from "../components/pre-event-details-page.tsx/profile-header";
import VendorSlider from "../components/pre-event-details-page.tsx/vendor-slider";
const VendorsDetailsPage = () => {
    return (
        <div>
            <Header />
            <VendorSlider />
            <VendorProfileHeader />
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
                            <ReviewsSection data={reviewsData} />
                            <ReviewSection />
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