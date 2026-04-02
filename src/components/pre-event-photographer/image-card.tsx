import type { Vendor } from "../../types/pre-event-photographer/image-type";

type Props = {
    vendor: Vendor;
};

const VendorCard = ({ vendor }: Props) => {
    return (
        <div className="col-lg-6 col-md-6 mb-4"> {/* ✅ THIS FIXES LAYOUT */}
            <div className="wedding-listing">

                <div className="img">
                    <a href="#">
                        <img src={vendor.image} alt={vendor.title} />
                    </a>

                    <div className="img-content">
                        <div className="top">

                            {vendor.handpicked && (
                                <span className="featured">
                                    <i className="fa fa-star"></i>
                                    <span>Handpicked</span>
                                </span>
                            )}

                            <span className="price">
                                <i className="fa fa-tag"></i>
                                <span>{vendor.price}</span>
                            </span>
                        </div>

                        <div className="bottom">
                            <a className="tags" href="#">
                                {vendor.tags}
                            </a>

                            <a className="favorite" href="#">
                                <i className="fa fa-heart-o"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="gap">
                        <h3>
                            <a href="#">
                                {vendor.title}
                                {vendor.verified && (
                                    <span className="verified">
                                        <i className="fa fa-check-circle"></i>
                                    </span>
                                )}
                            </a>
                        </h3>

                        <div>
                            <i className="fa fa-map-marker"></i> {vendor.location}
                        </div>
                    </div>

                    <div className="reviews">
                        <span className="stars">
                            {vendor.rating.map((star, i) => {
                                if (star === 1)
                                    return <i key={i} className="fa fa-star"></i>;
                                if (star === 0.5)
                                    return <i key={i} className="fa fa-star-half-stroke"></i>;
                                return <i key={i} className="fa fa-regular fa-star"></i>;
                            })}
                        </span>
                        ({vendor.reviews} review)
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VendorCard;