import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import BlogCard from "../components/blogcard";

// Images
import blog1 from "../assets/images/blogs/blog_1.jpg";
import blog2 from "../assets/images/blogs/blog_2.jpg";
import blog3 from "../assets/images/blogs/blog_3.jpg";
import blog4 from "../assets/images/blogs/blog_4.jpg";

type Blog = {
    id: number;
    title: string;
    description: string;
    image: string;
    updated: string;
};

const blogs: Blog[] = [
    {
        id: 1,
        title: "Bridal Exhibitions",
        description:
            "As grand weddings return, bridal exhibitions are back too—here’s the best of upcoming bridal expos in one list.",
        image: blog1,
        updated: "Feb 2025",
    },
    {
        id: 2,
        title: "The Best Facials",
        description:
            "Wedding planning stress? Discover finest facials to rejuvenate your skin and give you a serene, ethereal glow.",
        image: blog2,
        updated: "Sep 2025",
    },
    {
        id: 3,
        title: "Real Brides Reveal",
        description:
            "Wondering where to shop your bridal outfit? Real brides reveal unique stores beyond the usual names.",
        image: blog3,
        updated: "Jul 2025",
    },
    {
        id: 4,
        title: "Hiring a Planner",
        description:
            "Planning a wedding can feel like a whirlwind of choices and decisions—so many vendors and so many options!",
        image: blog4,
        updated: "Nov 2025",
    },
];

export default function BlogSlider() {
    return (
        <section className="rr-project-slider-area pt-5 rr-project-slider-bg section_one">
            <div className="container-fluid px-4 px-md-5">

                {/* Title */}
                <div className="section-title text-center mb-5">
                    <h1>Latest Blogs</h1>
                    <p>Fresh inspiration and trending ideas from Indian weddings</p>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={40}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    style={{ paddingBottom: "100px" }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1400: { slidesPerView: 4 },
                    }}
                >
                    {blogs.map((blog) => (
                        <SwiperSlide key={blog.id}>
                            <BlogCard blog={blog} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}