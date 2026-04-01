import type { FAQCategory } from "../../types/pre-event-photographer/faq-type";

export const faqData: FAQCategory[] = [
    {
        id: "general",
        title: "Find a Photographer",
        faqs: [
            {
                id: "one",
                question: "What all services provided by wedding photographers?",
                answer: "Photographers provide traditional, candid, videography, drone and album services."
            },
            {
                id: "two",
                question: "Why hire a professional photographer?",
                answer: "They capture emotions and preserve memories beautifully."
            },
            {
                id: "three",
                question: "How to find photographer within budget?",
                answer: "Use filters, compare pricing, shortlist and contact vendors."
            }
        ]
    },
    {
        id: "vendor",
        title: "Photographer FAQs",
        faqs: [
            {
                id: "v1",
                question: "How do I find top-rated photographers?",
                answer: "Browse platforms, compare reviews, ratings and portfolios."
            },
            {
                id: "v2",
                question: "How can I find photographers near me?",
                answer: "Use location filters and search tools."
            },
            {
                id: "v3",
                question: "Do I need photographer for every function?",
                answer: "Yes, it helps preserve every moment."
            }
        ]
    }
];