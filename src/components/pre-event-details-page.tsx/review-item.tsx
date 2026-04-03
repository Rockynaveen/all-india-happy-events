import Stars from "./star-component";
import ReviewCategoryBar from "./category-bar";
import type { ReviewItem as ReviewItemType } from "../../types/pre-event-photographer/pre-event-details/review-list-type";

type Props = {
  item: ReviewItemType;
};

const ReviewItem = ({ item }: Props) => {
  return (
    <div className="reviews-media">
      <div className="media">
        <img className="thumb" src={item.image} alt="" />

        <div className="media-body">
          <div className="heading-wrap no-gutters">
            <div className="heading">
              <div className="col pl-0">
                <h4 className="mb-0">{item.name}</h4>

                <div className="review-option-btn">
                  <a href="#">
                    <Stars />
                    <span>{item.rating}</span>
                  </a>
                </div>
              </div>

              <div className="col-auto">
                <small>{item.date}</small>
              </div>
            </div>
          </div>

          <h3 className="fw-7">{item.title}</h3>
          <p>{item.comment}</p>

          {/* Categories */}
          <div className="row">
            {item.categories.map((cat, i) => (
              <div key={i} className="col-md-4">
                <ReviewCategoryBar {...cat} />
              </div>
            ))}
          </div>

          {/* Reply */}
          {item.reply && (
            <div className="media reply-box">
              <img
                src="assets/images/testimonials/vendor.png"
                className="thumb"
              />
              <div className="media-body">
                <div className="d-md-flex justify-content-between mb-3">
                  <h4 className="mb-0">Vendor Response</h4>
                  <small className="txt-blue">{item.reply.date}</small>
                </div>
                {item.reply.message}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;