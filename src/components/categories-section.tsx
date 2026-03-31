import CategoryCard from "./category-cards";

import venues from "../assets/images/categories/blanket_hall.png";
import photography from "../assets/images/categories/photography.png";
import cake from "../assets/images/categories/categories_3.jpg";
import music from "../assets/images/categories/music.png";
import fashion from "../assets/images/categories/bridal_fashion.png";
import rituals from "../assets/images/categories/rituals.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function CategorySection() {
    const categories = [
        { id: 1, title: "Venues & Banquet Halls", vendors: 12, image: venues, icon: "weddingdir_venue" },
        { id: 2, title: "Photography & Films", vendors: 32, image: photography, icon: "weddingdir_camera" },
        { id: 3, title: "Cakes & Desserts", vendors: 10, image: cake, icon: "weddingdir_cake" },
        { id: 4, title: "Music & Entertainment", vendors: 10, image: music, icon: "weddingdir_music" },
        { id: 5, title: "Bridal Fashion", vendors: 10, image: fashion, icon: "weddingdir_fashion" },
        { id: 6, title: "Wedding Rituals", vendors: 10, image: rituals, icon: "weddingdir_pheras" },
    ];

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

                {/* Slider Row */}
                <div className="row">
                    <div className="col-12">

                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={30}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            slidesPerView={3}

                            // ✅ IMPORTANT: pagination inside a separate container
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