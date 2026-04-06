import React from "react";
import faqData from "../../data/pre-event-photographer/pre-event-details/faq-data";
import FaqRow from "./faq-row";

const FaqSection: React.FC = () => {
  return (
    <div className="card-shadow pos-rel">
      
      <a id="faq" className="anchor-fake"></a>

      <div className="card-shadow-header">
        <h3>
          <i className="fa fa-question-circle"></i> Faq’s
        </h3>
      </div>

      <div className="card-shadow-body p-0">
        <table className="table mb-0 table-faqs">
          <tbody>
            {faqData.map((item, index) => (
              <FaqRow key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default FaqSection;