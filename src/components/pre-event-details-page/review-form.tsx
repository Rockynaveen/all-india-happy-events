import React from "react";
import RatingOption from "./rating-option";
import ratingData from "../../data/pre-event-photographer/pre-event-details/review-rating-data";

const ReviewForm: React.FC = () => {
  return (
    <div className="card-shadow pos-rel">
      
      <a id="review-form" className="anchor-fake" tabIndex={-1}></a>

      <div className="card-shadow-header">
        <h3>
          <i className="fa fa-pencil"></i> Write A Review
        </h3>
      </div>

      <div className="card-shadow-body">

        {/* Ratings */}
        <div className="row rating-stars-wrap">
          {ratingData.map((item, index) => (
            <RatingOption key={index} {...item} />
          ))}
        </div>

        {/* Form */}
        <div className="row mt-4">
          
          <div className="col-md-12 mb-0">
            <div className="form-group">
              <textarea
                className="form-control"
                rows={5}
                placeholder="Your Comments"
              ></textarea>
            </div>
          </div>

          <div className="col-md-6 mb-0">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
            </div>
          </div>

          <div className="col-md-6 mb-0">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
              />
            </div>
          </div>

        </div>

        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Post Your Comment
          </button>
        </div>

      </div>
    </div>
  );
};

export default ReviewForm;