import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../services/blog-service";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
} from "swiper/modules";

import "swiper/css";

const LatestBlogs = () => {

  const { data, isLoading } =
    useQuery({
      queryKey: ["blogs"],
      queryFn: getBlogs,
    });


  if (isLoading) {
    return <p>Loading...</p>;
  }


  const blogs =
    Array.isArray(data)
      ? data
      : [];


  return (
    <section className="rr-project-slider-area pt-5 rr-project-slider-bg p-relative fix section_one">

      <div className="container">

        <div className="section-title text-center">

          <h1>
            Latest Blogs
          </h1>

          <p>
            Fresh inspiration and trending
            ideas from Indian weddings
          </p>

        </div>


        <div className="swiper-container rr-project-active ms-5">

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

            {blogs.map(
              (
                blog: any,
                index: number
              ) => (

                <SwiperSlide
                  key={index}
                >

                  <div className="swiper-slide">

                    <div
                      className="rr-project-slider-item wow rrfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay={`.${3 + index}s`}
                    >

                      {/* IMAGE */}
                      <div className="rr-project-slider-thumb">

                        <img
                          src={blog.thumbnail}
                          alt={blog.title}
                          onError={(e) => {
                            (
                              e.target as HTMLImageElement
                            ).src =
                              "/assets/images/placeholder.jpg";
                          }}
                        />

                      </div>


                      {/* CONTENT */}
                      <div className="rr-project-slider-content text-center">

                        <h3 className="rr-project-slider-title">

                          <a
                            href={`/blogs/${blog.slug}`}
                            className="bloghead"
                          >
                            {blog.title}
                          </a>

                        </h3>


                        <p>
                          {blog.short_description
                            ?.replace(/<[^>]+>/g, "")
                            ?.slice(0, 120) ||
                            "No description available"}
                          ...
                        </p>


                        <a
                          href={`/blogs/${blog.slug}`}
                          className="more-link"
                        >
                          Updated: {blog.created_at}
                        </a>

                      </div>

                    </div>

                  </div>

                </SwiperSlide>
              )
            )}

          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default LatestBlogs;