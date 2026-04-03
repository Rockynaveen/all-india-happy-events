type Props = {
    review: any;
};

const ReviewItem = ({ review }: Props) => {
    return (
        <div className="reviews-media">
            <div className="media">
                <img className="thumb" src={review.image} alt={review.name} />

                <div className="media-body">
                    <div className="heading d-flex justify-content-between">
                        <div>
                            <h4>{review.name}</h4>
                            <span>{review.rating} ⭐</span>
                        </div>
                        <small>{review.date}</small>
                    </div>

                    <h3 className="fw-7">{review.title}</h3>
                    <p>{review.description}</p>

                    {review.reply && (
                        <div className="media reply-box mt-3">
                            <img
                                src={review.reply.image}
                                alt="vendor"
                                className="thumb"
                            />
                            <div className="media-body">
                                <div className="d-flex justify-content-between">
                                    <h4>Vendor Response</h4>
                                    <small>{review.reply.date}</small>
                                </div>
                                {review.reply.message}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;