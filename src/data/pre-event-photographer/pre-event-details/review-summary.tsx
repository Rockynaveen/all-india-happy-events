import ReviewBreakdown from "./review-broke-down";

type Props = {
    summary: any;
    categories: any[];
};

const ReviewSummary = ({ summary, categories }: Props) => {
    return (
        <div className="card-shadow-body border-bottom">
            <div className="row no-gutters">
                <div className="col-md-auto">
                    <div className="review-count">
                        <span>{summary.rating}</span>
                        <small>out of 5.0</small>
                    </div>
                </div>

                <div className="col">
                    <ReviewBreakdown categories={categories} />
                </div>
            </div>
        </div>
    );
};

export default ReviewSummary;