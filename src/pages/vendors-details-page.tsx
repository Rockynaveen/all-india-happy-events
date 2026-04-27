<<<<<<< HEAD
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
=======
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useVendor } from "../hooks/use-vendor";
const VendorDetailsPage = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useVendor(); // fetching all vendors

  // 🔄 Loading
  if (isLoading) {
    return <p className="text-center py-5">Loading vendor...</p>;
  }

  // ❌ Error
  if (error) {
    return <p className="text-center text-danger">Something went wrong</p>;
  }

  // ✅ Find vendor from array
  const vendor = data?.data?.vendors?.find(
    (v: any) => v.slug === slug
  );

  // 🚨 Not found
  if (!vendor) {
    return <p className="text-center py-5">Vendor not found</p>;
  }

  return (
    <>
      <Header />

      <div className="container py-5">
        <div className="row g-4">

          {/* LEFT SIDE - IMAGE */}
          <div className="col-md-6">
            <img
              src={vendor.thumbnail}
              alt={vendor.brand_name}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT SIDE - DETAILS */}
          <div className="col-md-6">

            <h2 className="mb-2">{vendor.brand_name}</h2>

            <p className="text-muted">
              📍 {vendor.address?.city_id}, {vendor.address?.state_id}
            </p>

            <h4 className="text-primary">
              ₹{vendor.per_day_price} <small>/ day</small>
            </h4>

            <p className="mb-2">
              ⭐ {vendor.rating || 0} ({vendor.total_reviews} reviews)
            </p>

            {/* Premium Badge */}
            {vendor.is_premium && (
              <span className="badge bg-warning text-dark mb-3">
                Premium Vendor
              </span>
            )}

            <hr />

            {/* MENUS */}
            <h5 className="mb-3">Menu Pricing</h5>

            {vendor.menus && vendor.menus.length > 0 ? (
              <ul className="list-group">
                {vendor.menus.map((menu: any) => (
                  <li
                    key={menu.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span>{menu.name}</span>
                    <span>₹{menu.price_per_plate}/plate</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No menu available</p>
            )}

            {/* BUTTONS */}
            <div className="mt-4 d-flex gap-3">
              <button className="btn btn-primary w-50">
                Book Now
              </button>

              <button className="btn btn-outline-secondary w-50">
                Contact Vendor
              </button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VendorDetailsPage;
>>>>>>> cb3e55f (final commit)
