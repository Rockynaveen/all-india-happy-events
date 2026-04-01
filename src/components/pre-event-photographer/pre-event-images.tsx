import { imageData } from "../../data/pre-event-photographer/pre-event-images-data";

const ImageGrid = (): JSX.Element => {
    return (
        <div
            className="tab-pane fade"
            id="pills-images"
            role="tabpanel"
            aria-labelledby="pills-images-tab"
        >
            <div className="row">

                {imageData.map((item) => (
                    <div className="col-lg-6 col-md-6" key={item.id}>
                        <div className="wedding-listing">

                            {/* Image */}
                            <div className="img">
                                <a href="#">
                                    <img src={item.image} alt={item.name} />
                                </a>

                                <div className="img-content">
                                    <div className="top">

                                        {item.featured && (
                                            <span className="featured">
                                                <i className="fa fa-star"></i>
                                                <span>Handpicked</span>
                                            </span>
                                        )}

                                        <span className="price">
                                            <i className="fa fa-tag"></i>
                                            <span>₹{item.price}</span>
                                        </span>

                                    </div>

                                    <div className="bottom">
                                        <a className="tags" href="#">
                                            Photo + Video
                                        </a>

                                        <a className="favorite" href="#">
                                            <i className="fa fa-heart-o"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="content">
                                <div className="gap">
                                    <h3>
                                        <a href="#">
                                            {item.name}
                                            <span className="verified">
                                                <i className="fa fa-check-circle"></i>
                                            </span>
                                        </a>
                                    </h3>

                                    <div>
                                        <i className="fa fa-map-marker"></i> {item.location}
                                    </div>
                                </div>

                                <div className="reviews">
                                    <span className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    ({item.reviews} review)
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* Pagination */}
            <div className="theme-pagination">
                <nav>
                    <ul className="pagination">
                        <li className="page-item active">
                            <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">3</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default ImageGrid;