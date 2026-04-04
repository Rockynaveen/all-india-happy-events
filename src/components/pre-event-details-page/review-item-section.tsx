import ReviewItem from "./review-item";
import { reviewsData } from "../../data/pre-event-photographer/pre-event-details/review-list-data";
import Stars from "./star-component";

const ReviewsSection = () => {
    return (
        <div className="card-shadow pos-rel mt-5 py-5">

            <a id="reviews" className="anchor-fake"></a>

            {/* Header */}
            <div className="card-shadow-header d-md-flex justify-content-between align-items-center">
                <h3>
                    <i className="fa fa-star-o"></i>
                    Reviews for Poetic Pics Photography
                </h3>

                <a
                    href="#review-form"
                    className="btn btn-sm btn-dark mt-3 mt-md-0"
                >
                    Write A Review
                </a>
            </div>

            {/* Summary */}
            <div className="card-shadow-body border-bottom">
                <div className="row no-gutters">
                    <div className="col-md-auto">
                        <div className="review-count">
                            <span>3.8</span>
                            <small>out of 5.0</small>
                            <Stars />
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews */}
            <div className="card-shadow-body border-top">
                {reviewsData.map((item) => (
                    <ReviewItem key={item.id} item={item} />
                ))}

                <div className="text-center">
                    <a href="javascript:" className="btn btn-default btn-rounded">
                        See more reviews
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ReviewsSection;