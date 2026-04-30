<<<<<<< HEAD
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

=======
>>>>>>> c878c0b (added vendor services, auth store, updated types, removed unused stores)
import Hero from "../components/home/hero";
import CategoriesSection from "../components/home/categories-section";
import PopularLocationsSection from "../components/home/popular-location-sections";
import { useHomeData } from "../hooks/use-home";
import VendorCategories from "../components/home/vendor-categories";
import RealWeddings from "../components/home/real-weddings";
import LatestBlogs from "../components/home/latest-blogs";

import "../assets/css/style.css";

const HomePage = () => {
  const { data, isLoading, error } = useHomeData();

  if (isLoading) {
    return <p className="text-center py-5">Loading...</p>;
  }

  if (error) {
    return <p className="text-center py-5">Something went wrong</p>;
  }

  return (
    <>
      <Hero data={data} />

      <CategoriesSection categories={data?.categories || []} />

      <PopularLocationsSection cities={data?.cities || []} />

      <VendorCategories />
      <RealWeddings />
      <LatestBlogs />



    </>
  );
};

export default HomePage;
>>>>>>> cb3e55f (final commit)
