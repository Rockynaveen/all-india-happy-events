import React from "react";
import { reviewsData } from "../../data/pre-event-photographer/pre-event-details/review-list-data";import ReviewItem from "./reply-item";
import  type { ReviewType } from "../../types/pre-event-photographer/pre-event-details/reply-type"; // adjust path if needed

const ReviewsSection: React.FC = () => {
  return (
    <div className="card-shadow-body border-top">
      
      {reviewsData.map((review: ReviewType) => (
        <ReviewItem key={review.id} review={review} />
      ))}

      <div className="text-center">
        <button className="btn btn-default btn-rounded">
          See more reviews
        </button>
      </div>

    </div>
  );
};

export default ReviewsSection;