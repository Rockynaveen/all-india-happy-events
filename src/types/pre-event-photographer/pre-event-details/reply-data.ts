import type { ReviewType } from "../../../types/pre-event-photographer/pre-event-details/reply-type";

const reviewsData: ReviewType[] = [
  {
    id: 1,
    name: "Anusha Reddy",
    image: "assets/images/testimonials/test_1.png",
    rating: 4.2,
    date: "Married on 14, Feb, 2024",
    title: "Amazing Wedding Photography",
    description: "Poetric Pics Photography captured our Telugu wedding...",
    reply: null,
  },
  {
    id: 2,
    name: "Sai Teja",
    image: "assets/images/testimonials/test_2.png",
    rating: 4.2,
    date: "Married on 11, Dec, 2023",
    title: "Captured Every Ritual Perfectly",
    description: "Super impressed with the way Poetric Pics handled...",
    reply: {
      date: "18, Dec, 2023",
      message:
        "Thank you so much Sai Teja garu! It was a pleasure capturing your wedding.",
    },
  },
  {
    id: 3,
    name: "Harika Challa",
    image: "assets/images/testimonials/test_3.png",
    rating: 4.2,
    date: "Married on 22, Jan, 2024",
    title: "Beautiful Telugu Wedding Coverage",
    description: "Our Brahmin wedding rituals were captured exactly...",
    reply: null,
  },
];

export default reviewsData;