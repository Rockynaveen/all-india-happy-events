import React from "react";
import type { FAQItem } from "../../types/pre-event-photographer/faq-type";

type Props = {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem: React.FC<Props> = ({ item, isOpen, onClick }) => {
  return (
    <>
      {/* Header */}
      <div className="card-header">
        <a
          onClick={onClick}
          style={{ cursor: "pointer" }}
          className={isOpen ? "" : "collapsed"}
        >
          <span>{item.question}</span>

          {/* + / − */}
          <span style={{ float: "right" }}>
            {/* {isOpen ? "−" : "+"} */}
          </span>
        </a>
      </div>

      {/* Body */}
      <div className={`collapse ${isOpen ? "show" : ""}`}>
        <div className="card-body">
          {item.answer}
        </div>
      </div>
    </>
  );
};

export default AccordionItem;