import React from "react";
import type { RatingItem } from "../../types/pre-event-photographer/pre-event-details/review-rating-type";

const RatingOption: React.FC<RatingItem> = ({ label, icon }) => {
  return (
    <div className="col-md-4 col-6 mb-3 mb-md-0">
      <div className="review-option">
        
        <div className="icon">
          <i className={icon}></i>
        </div>

        <div className="count">
          <strong>{label}</strong>

          <div className="rating-stars">
            {[5, 4, 3, 2, 1].map((star) => (
              <a key={star} href={`#${star}`} title={`Give ${star} stars`}>
                <i className="fa fa-star-o"></i>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default RatingOption;