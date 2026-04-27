import Header from "../components/header";
import Footer from "../components/footer";
import { useFaqs } from "../hooks/use-faqs";

const FaqPage = () => {
  const { data = [], isLoading, error } = useFaqs();

  if (isLoading) return <p className="text-center py-5">Loading FAQs...</p>;
  if (error) return <p className="text-center py-5">Error loading FAQs</p>;

  return (
    <div>
      <Header />

      <div className="container py-5">
        <h2 className="mb-4">Frequently Asked Questions</h2>

        <div className="accordion" id="faqAccordion">

          {data.map((faq: any, index: number) => (
            <div className="accordion-item" key={index}>

              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${index}`}
                >
                  {faq.question}
                </button>
              </h2>

              <div
                id={`faq${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FaqPage;