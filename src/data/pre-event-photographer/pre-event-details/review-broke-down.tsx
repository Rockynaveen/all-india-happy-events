type Props = {
    categories: any[];
};

const ReviewBreakdown = ({ categories }: Props) => {
    return (
        <div className="row">
            {categories.map((item, index) => (
                <div className="col-md-4" key={index}>
                    <div className="review-option">
                        <div className="icon">
                            <i className={`fa ${item.icon}`}></i>
                            <span className="review-each-count">{item.rating}</span>
                        </div>
                        <div className="count">
                            <strong>{item.label}</strong>
                            <div className="bar-base">
                                <div
                                    className="bar-filled"
                                    style={{ width: `${item.percentage}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewBreakdown;