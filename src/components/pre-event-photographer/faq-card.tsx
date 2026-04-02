import React from "react";
import type { FAQItem } from "../../types/pre-event-photographer/faq-type";

type Props = {
    item: FAQItem;
    isOpen: boolean;
    onToggle: (id: string) => void;
};

const FAQCard: React.FC<Props> = ({ item, isOpen, onToggle }) => {
    return (
        <>
            <div className="card-header">
                <button
                    className="btn btn-link w-100 text-start"
                    onClick={() => onToggle(item.id)}
                >
                    {item.question}
                </button>
            </div>

            {isOpen && (
                <div className="card-body">
                    {item.answer}
                </div>
            )}
        </>
    );
};

export default FAQCard;