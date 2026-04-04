import RatingStars from "./rating-stars";

type Props = {
  label: string;
  icon: string;
};

const ReviewOption = ({ label, icon }: Props) => {
  return (
    <div className="review-option">
      <div className="icon">
        <i className={icon}></i>
      </div>

      <div className="count">
        <strong>{label}</strong>
        <RatingStars />
      </div>
    </div>
  );
};

export default ReviewOption;