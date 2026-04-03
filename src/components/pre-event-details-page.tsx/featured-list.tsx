import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import type { FeaturedListing } from "../../types/pre-event-photographer/pre-event-details/featured-list-type";

type Props = {
    data: FeaturedListing[];
};

const FeaturedListing = ({ data }: Props) => {
    if (!data || data.length === 0) {
        return <div className="widget mb-5">No listings available</div>;
    }

    return (
        <div className="widget mb-5">
            <h3 className="widget-title">Featured Listing</h3>

            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className}"></span>`;
                    },
                }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="wedding-listing">

                            {/* Image Section */}
                            <div className="img">
                                <a href="#">
                                    <img src={item.image} alt={item.title} />
                                </a>

                                <div className="img-content">
                                    <div className="top">
                                        {item.isFeatured && (
                                            <span className="featured">
                                                <i className="fa fa-star"></i>
                                                <span>Featured</span>
                                            </span>
                                        )}

                                        <span className="price">
                                            <i className="fa fa-tag"></i>
                                            <span>{item.price}</span>
                                        </span>
                                    </div>

                                    <div className="bottom">
                                        <a className="tags" href="#">
                                            {item.category}
                                        </a>
                                        <a className="favorite" href="#">
                                            <i className="fa fa-heart-o"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="content">
                                <div className="gap">
                                    <h3>
                                        <a href="#">
                                            {item.title}
                                            <span className="verified">
                                                <i className="fa fa-check-circle"></i>
                                            </span>
                                        </a>
                                    </h3>

                                    <div>
                                        <i className="fa fa-map-marker"></i> {item.location}
                                    </div>
                                </div>

                                <div className="reviews">
                                    <span className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </span>
                                    ({item.reviews} reviews)
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedListing;