type Props = {
    icon: string;
    label: string;
    rating: number;
    percentage: number;
};

const ReviewCategoryBar = ({ icon, label, rating, percentage }: Props) => {
    return (
        <div className="review-option">
            <div className="icon">
                <i className={icon}></i>
                <span className="review-each-count">{rating}</span>
            </div>

            <div className="count">
                <strong>{label}</strong>
                <div>
                    <div className="bar-base">
                        <div
                            className="bar-filled"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCategoryBar;