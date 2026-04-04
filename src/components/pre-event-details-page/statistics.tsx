import React from "react";

const Statistics = () => {
    return (
        <div className="widget mb-5">
            <h3 className="widget-title">Statistics</h3>

            <div className="row">
                <div className="col-6 mb-0">
                    <div className="icon-box-style-3 sided">
                        <i className="fa fa-eye"></i>
                        <span> 7521</span>
                    </div>
                </div>

                <div className="col-6 mb-0">
                    <div className="icon-box-style-3 sided">
                        <i className="fa fa-star-o"></i>
                        <span> 8 Rating</span>
                    </div>
                </div>

                <div className="col-6 mb-0">
                    <div className="icon-box-style-3 sided">
                        <i className="fa fa-share"></i>
                        <span> 24 Share</span>
                    </div>
                </div>

                <div className="col-6 mb-0">
                    <div className="icon-box-style-3 sided">
                        <i className="fa fa-heart-o"></i>
                        <span> 99 Favorite</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;