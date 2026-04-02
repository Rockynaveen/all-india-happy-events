export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type TabType = {
  id: string;
  title: string;
  faqs: FAQItem[];
};