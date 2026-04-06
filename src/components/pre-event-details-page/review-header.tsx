import React from "react";

const ReviewHeader = ({ title = "Reviews for Poetic Pics Photography" }) => {
  return (
    <div className="card-shadow pos-rel">
      <a id="reviews" className="anchor-fake"></a>

      <div className="card-shadow-header d-md-flex justify-content-between align-items-center">
        <h3>
          <i className="fa fa-star-o"></i>
          {title}
        </h3>

        <a
          href="#review-form"
          className="btn btn-sm btn-dark mt-3 mt-md-0"
          id="write-review-form"
        >
          Write A Review
        </a>
      </div>
    </div>
  );
};

export default ReviewHeader;