import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import BlogCard from "./blogcard";
import { blogs } from "../data/blog";

export default function BlogSlider() {
    return (
        <section className="rr-project-slider-area pt-5 rr-project-slider-bg section_one">
            <div className="container-fluid px-4 px-md-5">

                <div className="section-title text-center mb-5">
                    <h1>Latest Blogs</h1>
                    <p>Fresh inspiration and trending ideas from Indian weddings</p>
                </div>

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