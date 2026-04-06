import React from "react";
import ReviewOption from "../../components/pre-event-details-page/review-option";
import reviewData from "../../data/pre-event-photographer/pre-event-details/review-data";

const ReviewSummary = () => {
  return (
    <div className="card-shadow-body border-bottom">
      <div className="row no-gutters">

        <div className="col-md-auto">
          <div className="review-count">
            <span>3.8</span>
            <small>out of 5.0</small>

            <div className="stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="row">
            {reviewData.map((item, index) => (
              <ReviewOption key={index} {...item} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewSummary;