import SearchResultHeader from "../components/pre-event-photographer/search-header";
import Header from "../components/header";
import Footer from "../components/footer";
import PhotographerList from "../components/pre-event-photographer/photographer-list";
import ImageGrid from "../components/pre-event-photographer/pre-event-images";
import PopularServices from "../components/pre-event-photographer/popular-services";
import PlannerSection from "../components/pre-event-photographer/contact-section";
import FAQTabs from "../components/pre-event-photographer/faq-section";


const PreEventPhotographers = (): JSX.Element => {
    return (
        <>
            <Header />
            <SearchResultHeader />
            <PhotographerList />
            <ImageGrid />
            <FAQTabs/>
            <PopularServices />
            <PlannerSection />

            <Footer />
        </>
    );
};

export default PreEventPhotographers;