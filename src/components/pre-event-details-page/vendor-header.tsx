import React from "react";

const VendorProfileHeader: React.FC = () => {
  return (
    <div className="vendor-profile-single">
      <div className="container pos-rel">

        {/* TABS */}
        <div className="vendor-tab-circle">
          <ul className="nav nav-pills justify-content-center">

            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#pills-gallery"
              >
                <i className="fa fa-image"></i>
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link active"
                data-bs-toggle="pill"
                data-bs-target="#pills-hr-grid"
              >
                <i className="fa fa-th-large"></i>
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#pills-streetview"
              >
                <i className="fa fa-street-view"></i>
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#pills-video"
              >
                <i className="fa fa-video-camera"></i>
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#pills-map"
              >
                <i className="fa fa-map-marker"></i>
              </button>
            </li>

          </ul>
        </div>

        {/* CONTENT */}
        <div className="row align-items-end mt-4">

          <div className="col-lg-6">
            <h3>Poetric Pics Photography</h3>
            <p>
              <i className="fa fa-map-marker"></i> Hyderabad, Telangana
            </p>

            <div className="reviews">
              <span className="badge bg-success">4.6</span> 124 Reviews
            </div>
          </div>

          <div className="col-lg-6 text-lg-end mt-3">

            <button className="btn btn-outline-secondary mb-2 me-2">
              <i className="fa fa-heart"></i> Favorite
            </button>

            <div className="btn-group mb-2 me-2">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-share"></i> Share
              </button>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item">Facebook</a></li>
                <li><a className="dropdown-item">Twitter</a></li>
                <li><a className="dropdown-item">Instagram</a></li>
                <li><a className="dropdown-item">Email</a></li>
              </ul>
            </div>

            <button className="btn btn-outline-secondary mb-2 me-2">
              <i className="fa fa-envelope"></i> Inbox
            </button>

            <button className="btn btn-primary mb-2">
              <i className="fa fa-check"></i> Contact
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default VendorProfileHeader;