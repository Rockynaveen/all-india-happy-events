import CategoryCard from "../components/category-cards";
import { categories } from "../data/categories-data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function CategorySection() {
    return (
        <section className="wide-tb-120">
            <div className="container">

                <div className="section-title text-center mb-4">
                    <h1>Popular Wedding Categories</h1>
                    <p>
                        Browse trusted vendors across India for venues, photography,
                        bridal fashion, décor and more.
                    </p>
                </div>

                <div className="row">
                    <div className="col-12">

                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={30}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            slidesPerView={3}
                            pagination={{
                                clickable: true,
                                el: ".custom-pagination",
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 3 },
                            }}
                        >
                            {categories.map((cat) => (
                                <SwiperSlide key={cat.id}>
                                    <CategoryCard category={cat} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="custom-pagination text-center mt-4"></div>

                    </div>
                </div>

            </div>
        </section>
    );
}