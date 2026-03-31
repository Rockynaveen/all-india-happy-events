import Header from "../components/header";
import "../assets/css/style.css";
import "../assets/css/base.css";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Categorycards from "../components/category-cards";
import LocationCards from "../components/location-cards";
import RealWeddings from "../components/real-wedding-cards";
import CalloutSection from "../components/cta";
import VendorCategories from "../components/vendor-categories";
import Partners from "../components/partners";
import LatestBlogs from "../components/latest-blogs";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categorycards />
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