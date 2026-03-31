import {
    IconBuilding,
    IconCamera,
    IconCake,
    IconMusic,
    IconShirt,
    IconFlame
} from "@tabler/icons-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import venues from "../assets/images/categories/banquet.png";
import photography from "../assets/images/categories/photography.png";
import cake from "../assets/images/categories/categories_3.jpg";
import music from "../assets/images/categories/music.png";
import fashion from "../assets/images/categories/bridal_fashion.png";
import rituals from "../assets/images/categories/rituals.png";

const Categorycards = () => {

    const categories = [
        {
            title: "Venues & Banquet Halls",
            count: "12 vendors",
            img: venues,
            icon: <IconBuilding size={60} />   // ✅ bigger
        },
        {
            title: "Photography & Films",
            count: "32 vendors",
            img: photography,
            icon: <IconCamera size={60} />     // ✅ bigger
        },
        {
            title: "Cakes & Desserts",
            count: "10 vendors",
            img: cake,
            icon: <IconCake size={60} />        // ✅ bigger
        },
        {
            title: "Music & Entertainment",
            count: "10 vendors",
            img: music,
            icon: <IconMusic size={60} />       // ✅ bigger
        },
        {
            title: "Bridal Fashion",
            count: "10 vendors",
            img: fashion,
            icon: <IconShirt size={60} />       // ✅ bigger
        },
        {
            title: "Wedding Rituals",
            count: "10 vendors",
            img: rituals,
            icon: <IconFlame size={60} />       // ✅ bigger
        }
    ];

    return (
        <section className="wide-tb-120">
            <div className="container">

                <div className="section-title text-center">
                    <h1>Popular Wedding Categories</h1>
                    <p>
                        Browse trusted vendors across India for venues, photography,
                        bridal fashion, décor and more.
                    </p>
                </div>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 }
                    }}
                    className="pb-5"
                >
                    {categories.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="popular-categories">

                                <img src={item.img} alt={item.title} />

                                <div className="content-wrap">
                                    <div className="content">
                                        <div className="mt-auto d-flex align-items-center w-100 justify-content-between">

                                            <div className="catlinks">
                                                <a href="#">
                                                    <h3>{item.title}</h3>
                                                </a>
                                                <a href="#">
                                                    <span className="count-listings">
                                                        {item.count}
                                                    </span>
                                                </a>
                                            </div>

                                            <a href="#" className="icon">
                                                {item.icon}
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default Categorycards;