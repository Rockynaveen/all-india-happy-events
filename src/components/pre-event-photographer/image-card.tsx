import { Link } from "react-router-dom";
import type { Vendor } from "../../types/pre-event-photographer/image-type";

type Props = {
    vendor: Vendor;
};

const VendorCard = ({ vendor }: Props) => {
    return (
        <div className="col-lg-6 col-md-6 mb-4">
            <div className="wedding-listing">

                <div className="img">

                    {/* ✅ CLICK IMAGE → GO TO DETAILS */}
                    <Link to={`/vendors/${vendor.id}`}>
                        <img src={vendor.image} alt={vendor.title} />
                    </Link>

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

                            {/* ✅ TAG CLICK */}
                            <Link className="tags" to={`/vendors/${vendor.id}`}>
                                {vendor.tags}
                            </Link>

                            <button className="favorite">
                                <i className="fa fa-heart-o"></i>
                            </button>

                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="gap">

                        {/* ✅ TITLE CLICK */}
                        <h3>
                            <Link to={`/vendors/${vendor.id}`}>
                                {vendor.title}
                                {vendor.verified && (
                                    <span className="verified">
                                        <i className="fa fa-check-circle"></i>
                                    </span>
                                )}
                            </Link>
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