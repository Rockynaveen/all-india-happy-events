import type { PopularPost } from "../../types/blog/popular-post-type";

import img1 from "../../assets/images/blogs/blog_standard_img_1.jpg";
import img2 from "../../assets/images/blogs/blog_standard_img_5.jpg";
import img3 from "../../assets/images/blogs/blog_standard_img_3.jpg";

export const popularPosts: PopularPost[] = [
    {
        id: 1,
        title: "Asha & Varun’s Elegant Wedding",
        date: "September 27, 2020",
        image: img1,
    },
    {
        id: 2,
        title: "10 Tips For South Indian Destination Weddings",
        date: "September 27, 2020",
        image: img2,
    },
    {
        id: 3,
        title: "Essential Bridal Wear Guide",
        date: "September 27, 2020",
        image: img3,
    },
];