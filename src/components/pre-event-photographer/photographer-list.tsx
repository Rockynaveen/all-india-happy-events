import React from "react";
import { photographersData } from "../../data/pre-event-photographer/pre-event-list-data";

const PhotographerList = (): JSX.Element => {
    return (
        <section>
            <div className="container">

                {photographersData.map((item) => (
                    <div className="result-list" key={item.id}>
                        <div className="row">

                            {/* Image */}
                            <div className="col-md-4">
                                <div className="img">
                                    <a href="#">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="rounded"
                                        />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="col-md-8">
                                <div className="content">
                                    <div className="head">
                                        <a href="#" className="favorite active">
                                            <i className="fa fa-heart"></i>
                                        </a>

                                        <h3>
                                            <a href="#">{item.name}</a>
                                        </h3>

                                        <div className="rating">
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

                                    <p className="text-muted">
                                        <i className="fa-solid fa-location-dot"></i>{" "}
                                        {item.location}
                                    </p>

                                    <p className="text-muted">Photo + Video</p>

                                    <h4 className="fw-bold">
                                        <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                                        {item.price} per day
                                    </h4>

                                    <div className="bottom">
                                        <a href="#">
                                            <span className="badge border rounded p-2">
                                                Average Bookings 300
                                            </span>
                                        </a>

                                        <a
                                            href="#"
                                            className="btn btn-outline-primary btn-rounded"
                                        >
                                            Request Pricing
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default PhotographerList;