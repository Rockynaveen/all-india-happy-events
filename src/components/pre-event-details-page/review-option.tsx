import React from "react";

const ReviewOption = (props: any) => {
  const { icon, rating, title, percentage } = props;

  return (
    <div className="col-md-4">
      <div className="review-option">
        <div className="icon">
          <i className={`fa ${icon}`}></i>
          <span className="review-each-count">{rating}</span>
        </div>

        <div className="count">
          <strong>{title}</strong>
          <div>
            <div className="bar-base">
              <div
                className="bar-filled"
                style={{ width: `${percentage}%` }}
              >
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewOption;