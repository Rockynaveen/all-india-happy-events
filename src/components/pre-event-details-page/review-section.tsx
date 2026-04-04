import ReviewOption from "./review-option";
import { reviewCategories } from "../../data/pre-event-photographer/pre-event-details/review-data";

const ReviewSection = () => {
  return (
    <div className="card-shadow pos-rel">
      <a id="review-form" className="anchor-fake" tabIndex={-1}></a>

      <div className="card-shadow-header">
        <h3>
          <i className="fa fa-pencil"></i> Write A Review
        </h3>
      </div>

      <div className="card-shadow-body">
        {/* Rating Options */}
        <div className="row rating-stars-wrap">
          {reviewCategories.map((item) => (
            <div key={item.id} className="col-md-4 col-6 mb-3 mb-md-0">
              <ReviewOption label={item.label} icon={item.icon} />
            </div>
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

export default ReviewSection;