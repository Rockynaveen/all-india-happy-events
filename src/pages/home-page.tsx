<<<<<<< HEAD
import Header from "../components/header";
import "../assets/css/style.css";
import "../assets/css/base.css";
import Footer from "../components/footer";
import Hero from "../components/hero";
import LocationCards from "../components/location-section";
import RealWeddings from "../components/wedding-section";
import CalloutSection from "../components/cta";
import VendorCategories from "../components/vendor-categories";
import Partners from "../components/partners";
import LatestBlogs from "../components/latest-blogs";
import CategorySection from "../components/categories-section";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CategorySection />
      <LocationCards />
      <VendorCategories />
      <CalloutSection />
      <RealWeddings />
      <Partners />
      <LatestBlogs />
      <Footer />
    </div>
  );
};

export default Homepage;
=======

import Hero from "../components/home/hero";
import CategoriesSection from "../components/home/popular-categories"
import PopularVenues from "../components/home/popular-venues";
import VendorsSection from "../components/home/vendor-section";

import { useHomeData } from "../hooks/use-home";

import "../assets/css/style.css";

const HomePage = () => {
  const { data, isLoading, error } = useHomeData();

  return (
    <>

      {/* 🔄 Loading */}
      {isLoading && <p className="text-center py-5">Loading...</p>}

      {/* ❌ Error */}
      {error && <p className="text-center py-5">Something went wrong</p>}

      {/* ✅ Main Content */}
      {!isLoading && !error && data && (
        <>
          <Hero data={data.hero} />
          <CategoriesSection categories={data.categories} />
          <PopularVenues venues={data.venues} />
          <VendorsSection vendors={data.vendors} /> {/* ✅ FIXED */}
        </>
      )}

    </>
  );
};

export default HomePage;
>>>>>>> cb3e55f (final commit)
