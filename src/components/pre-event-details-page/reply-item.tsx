import React from "react";
import type { ReviewType } from "../../types/pre-event-photographer/pre-event-details/reply-type";
import ReviewReply from "./reply";

type Props = {
  review: ReviewType;
};

const ReviewItem: React.FC<Props> = ({ review }) => {
  return (
    <div className="reviews-media">
      <div className="media">
        <img className="thumb" src={review.image} alt="" />

        <div className="media-body">
          <div className="heading-wrap no-gutters">
            <div className="heading">
              <div className="col pl-0">
                <h4 className="mb-0">{review.name}</h4>

                <div className="review-option-btn">
                  <a
                    data-toggle="collapse"
                    href={`#review-option-toggle-${review.id}`}
                    role="button"
                    aria-expanded="false"
                    className="collapsed"
                  >
                    <span className="stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                      <i className="fa fa-star-o"></i>
                    </span>
                    <span>
                      {review.rating}{" "}
                      <i className="fa fa-angle-down arrow"></i>
                    </span>
                  </a>
                </div>
              </div>

              <div className="col-auto">
                <small>{review.date}</small>
              </div>
            </div>

            <div
              id={`review-option-toggle-${review.id}`}
              className="collapse"
            >
              <div className="row">
                {/* keep same static review-option blocks OR reuse component */}
              </div>
            </div>
          </div>

          <h3 className="fw-7">{review.title}</h3>
          <p>{review.description}</p>

          <ReviewReply reply={review.reply} />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;