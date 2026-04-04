import Footer from "../components/footer";
import Header from "../components/header";
import LocationSection from "../components/pre-event-details-page/location-section";

import ReviewSection from "../components/pre-event-details-page/review-section";
import ReviewsSection from "../components/pre-event-details-page/review-item-section";
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
import { reviewsData } from "../data/pre-event-photographer/pre-event-details/review-list-data";
import VendorNav from "../components/pre-event-details-page/nav-section";
import VendorProfileHeader from "../components/pre-event-details-page/profile-header";
import VendorSlider from "../components/pre-event-details-page/vendor-slider";
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