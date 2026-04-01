import React from "react";

const SearchResultHeader = (): JSX.Element => {
    return (
        <section className="search-result-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 mx-auto mb-5">
                        <h1>Find the Perfect Wedding Photographer</h1>
                        <p className="lead">
                            Search over 360,000 Photographers with reviews, pricing,
                            availability and more
                        </p>

                        <div className="input-group">
                            <input
                                type="text"
                                aria-label="First name"
                                className="form-control form-light"
                                placeholder="Search Wedding Photographers"
                            />
                            <input
                                type="text"
                                aria-label="Last name"
                                className="form-control form-light left-border"
                                placeholder="Search Wedding Location"
                            />
                            <div className="input-group-prepend">
                                <button type="submit" className="btn btn-default">
                                    Search Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">
                                <i className="fa fa-home"></i>
                            </a>
                        </li>
                        <li className="breadcrumb-item">Vendors</li>
                        <li className="breadcrumb-item active">
                            Wedding Photographers
                        </li>
                    </ol>
                </nav>
            </div>
        </section>
    );
};

export default SearchResultHeader;