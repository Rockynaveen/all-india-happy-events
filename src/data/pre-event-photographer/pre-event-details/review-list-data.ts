import type { ReviewItem } from "../../../types/pre-event-photographer/pre-event-details/review-list-type";

// ✅ IMPORT IMAGES (ALL SAME LEVEL)
import test1 from "../../../assets/images/testimonials/test_1.png";
import test2 from "../../../assets/images/testimonials/test_2.png";
import test3 from "../../../assets/images/testimonials/test_3.png";
import vendor from "../../../assets/images/testimonials/vendor.png";

export const reviewsData: ReviewItem[] = [
    {
        id: "1",
        name: "Anusha Reddy",
        image: test1,
        rating: 4.2,
        date: "Married on 14, Feb, 2024",
        title: "Amazing Wedding Photography",
        comment:
            "Poetric Pics Photography captured our Telugu wedding so beautifully.",
        categories: [
            { label: "Quality Service", icon: "fa fa-smile-o", rating: 4.9, percentage: 80 },
            { label: "Facilities", icon: "fa fa-exchange", rating: 3.7, percentage: 67 },
            { label: "Staff", icon: "fa fa-male", rating: 4.0, percentage: 75 },
            { label: "Flexibility", icon: "fa fa-sliders", rating: 4.9, percentage: 80 },
            { label: "Value of money", icon: "fa fa-dollar", rating: 4.9, percentage: 80 },
        ],
    },

    {
        id: "2",
        name: "Sai Teja",
        image: test2,
        rating: 4.2,
        date: "Married on 11, Dec, 2023",
        title: "Captured Every Ritual Perfectly",
        comment:
            "Super impressed with the way Poetric Pics handled our pelli functions.",
        categories: [
            { label: "Quality Service", icon: "fa fa-smile-o", rating: 4.9, percentage: 80 },
            { label: "Facilities", icon: "fa fa-exchange", rating: 3.7, percentage: 67 },
            { label: "Staff", icon: "fa fa-male", rating: 4.0, percentage: 75 },
            { label: "Flexibility", icon: "fa fa-sliders", rating: 4.9, percentage: 80 },
            { label: "Value of money", icon: "fa fa-dollar", rating: 4.9, percentage: 80 },
        ],
        reply: {
            date: "18, Dec, 2023",
            message:
                "Thank you so much Sai Teja garu! It was a pleasure capturing your wedding.",
            // ✅ OPTIONAL (if you want vendor image dynamic)
            image: vendor,
        },
    },

    {
        id: "3",
        name: "Harika Challa",
        image: test3,
        rating: 4.2,
        date: "Married on 22, Jan, 2024",
        title: "Beautiful Telugu Wedding Coverage",
        comment:
            "Our Brahmin wedding rituals were captured exactly how we imagined.",
        categories: [
            { label: "Quality Service", icon: "fa fa-smile-o", rating: 4.9, percentage: 80 },
            { label: "Facilities", icon: "fa fa-exchange", rating: 3.7, percentage: 67 },
            { label: "Staff", icon: "fa fa-male", rating: 4.0, percentage: 75 },
            { label: "Flexibility", icon: "fa fa-sliders", rating: 4.9, percentage: 80 },
            { label: "Value of money", icon: "fa fa-dollar", rating: 4.9, percentage: 80 },
        ],
    },
];