
import Hero from "../components/home/hero";
import CategoriesSection from "../components/home/categories-section";
import PopularLocationsSection from "../components/home/popular-location-sections";
import { useHomeData } from "../hooks/use-home";
import RealWeddings from "../components/home/real-weddings";
import LatestBlogs from "../components/home/latest-blogs";
import VendorsSection from "../components/home/vendor-section";
import "../assets/css/style.css";
import PopularCategories from "../components/home/popular-categories";
import CallOutSection from "../components/home/cta-section";

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
      <PopularCategories/>


      <PopularLocationsSection cities={data?.cities || []} />
            <CategoriesSection categories={data?.categories || []} />
            <VendorsSection/>
            <CallOutSection />



      <RealWeddings />
      <LatestBlogs />



    </>
  );
};

export default HomePage;

