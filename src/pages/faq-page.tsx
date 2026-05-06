import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFaqs } from "../services/faq-service";
import { IconHome, IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

const FaqPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["faqs"],
    queryFn: getFaqs,
  });

  const faqs = data?.data || data || [];


  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-page">
      <div className="container pt-5" style={{ marginTop: "90px" }}>
        
        {/* Breadcrumb */}
        <div className="mb-4">
          <nav className="d-flex align-items-center small text-muted">
            <Link to="/" className="text-decoration-none text-muted d-flex align-items-center">
              <IconHome size={16} />
            </Link>
            <span className="mx-2">/</span>
            <span className="fw-semibold text-dark">FAQs</span>
          </nav>
        </div>

        {/* Heading */}
        <div className="text-center mb-5">
          <div className="faq-icon mx-auto mb-3">?</div>
          <h1 className="fw-bold">Frequently Asked Questions</h1>
        </div>

        {/* FAQ List */}
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {isLoading && <p className="text-center">Loading FAQs...</p>}

            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`faq-card ${isOpen ? "active" : ""}`}
                >
                  {/* Question */}
                  <div
                    className="faq-question"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    {faq.question}
                    <IconChevronDown className={`icon ${isOpen ? "rotate" : ""}`} />
                  </div>

                  {/* Answer */}
                  {isOpen && (
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .faq-page {
          background: #f9fafb;
          min-height: 100vh;
        }

        .faq-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff2e86, #ff6b6b);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          font-weight: bold;
        }

        .faq-card {
          background: white;
          border-radius: 12px;
          margin-bottom: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          overflow: hidden;
          transition: 0.3s;
        }

        .faq-card.active {
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .faq-question {
          padding: 18px;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .faq-answer {
          padding: 18px;
          border-top: 1px solid #eee;
          color: #555;
          line-height: 1.6;
        }

        .icon {
          transition: transform 0.3s ease;
        }

        .icon.rotate {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default FaqPage;