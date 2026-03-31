import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BlogCard from "../components/blogcard";

import blog1 from "../assets/images/blogs/blog_1.jpg";
import blog2 from "../assets/images/blogs/blog_2.jpg";
import blog3 from "../assets/images/blogs/blog_3.jpg";
import blog4 from "../assets/images/blogs/blog_4.jpg";

const LatestBlogs = () => {

    const blogs = [
        {
            title: "Bridal Exhibitions",
            description:
                "As grand weddings return, bridal exhibitions are back too—here’s the best of upcoming bridal expos in one list.",
            date: "Updated: Feb 2025",
            img: blog1,
        },
        {
            title: "The Best Facials",
            description:
                "Discover finest facials to rejuvenate your skin and give you a serene glow.",
            date: "Updated: Sep 2025",
            img: blog2,
        },
        {
            title: "Real Brides Reveal",
            description:
                "Real brides reveal unique stores beyond the usual names.",
            date: "Updated: Jul 2025",
            img: blog3,
        },
        {
            title: "Hiring a Planner",
            description:
                "Planning a wedding involves many vendors and decisions.",
            date: "Updated: Nov 2025",
            img: blog4,
        },
    ];

    return (
        <section className="rr-project-slider-area pt-5 section_one">
            <div className="container">

                {/* TITLE */}
                <div className="section-title text-center">
                    <h1>Latest Blogs</h1>
                    <p>Fresh inspiration and trending ideas from Indian weddings</p>
                </div>

                {/* SWIPER */}
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {blogs.map((blog, index) => (
                        <SwiperSlide key={index}>
                            <BlogCard {...blog} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default LatestBlogs;