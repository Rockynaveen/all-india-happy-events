import { useEffect, useState } from "react";

import {
  getPopularCategories,
} from "../../services/category-service";

import type {
  PopularCategory,
} from "../../services/category-service";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
} from "swiper/modules";

import "swiper/css";

const PopularCategories = () => {

  const [categories, setCategories] =
    useState<PopularCategory[]>([]);


  useEffect(() => {

    const load = async () => {

      try {

        const data =
          await getPopularCategories();

        setCategories(data);

      } catch (e) {
        console.error(e);
      }

    };

    load();

  }, []);


  return (
    <section className="wide-tb-120">

      <div className="container">

        <div className="section-title text-center">

          <h1>
            Popular Wedding Categories
          </h1>

          <p>
            Browse trusted vendors across India
            for venues, photography,
            bridal fashion, décor and more.
          </p>

        </div>


        <Swiper

          modules={[Autoplay]}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          speed={1000}

          loop={true}

          spaceBetween={20}

          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },
          }}
        >

          {categories.map((cat) => (

            <SwiperSlide
              key={cat.id}
            >

              <div className="popular-categories">

                <img
                  src={
                    cat.image &&
                    cat.image !==
                      "https://allhappyevents.jbservices.in/public/storage"
                      ? cat.image
                      : "/assets/images/categories/default.png"
                  }
                  alt={cat.name}
                />


                <div className="content-wrap">

                  <div className="content">

                    <div className="mt-auto d-flex align-items-center w-100 justify-content-between">

                      <div className="catlinks">

                        <a
                          href={`/vendors-list/${cat.slug}`}
                        >
                          <h3>
                            {cat.name}
                          </h3>
                        </a>


                        <span className="count-listings">
                          {cat.vendor_count ?? 0}
                          {" "}vendors
                        </span>

                      </div>


                      <a
                        href="#"
                        className="icon"
                      >
                        <i className="weddingdir_venue"></i>
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

export default PopularCategories;