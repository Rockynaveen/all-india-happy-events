import { useQuery } from "@tanstack/react-query";
import { getFaqs } from "../../services/faq-service";

export default function Faqs() {
  const { data: faqs, isLoading, isError } = useQuery({
    queryKey: ["faqs"],
    queryFn: getFaqs,
  });

  if (isLoading) return <p>Loading FAQs...</p>;
  if (isError) return <p>Error loading FAQs</p>;

  return (
    <div className="container py-5">
      <h2 className="mb-4">FAQs</h2>

      <div className="accordion" id="faqAccordion">
        {faqs.map((faq: any, index: number) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faq-${index}`}
              >
                {faq.question}
              </button>
            </h2>

            <div
              id={`faq-${index}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
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
  );
}