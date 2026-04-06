import React from "react";

const VendorActions: React.FC = () => {
  return (
    <div className="col-lg-6 text-lg-right mt-lg-0 mt-4">

      <a href="javascript:" className="btn btn-outline-white mb-2">
        <i className="fa fa-heart-o"></i> Favorite
      </a>

      <span className="dropdown hover_out">
        <a
          className="btn btn-outline-white mb-2"
          href="#"
          data-bs-toggle="dropdown"
        >
          <i className="fa fa-share-alt"></i> Share
        </a>

        <span className="dropdown-menu">
          <a className="dropdown-item" href="javascript:">
            <i className="fa fa-facebook-f"></i> Facebook
          </a>
          <a className="dropdown-item" href="javascript:">
            <i className="fa fa-twitter"></i> Twitter
          </a>
          <a className="dropdown-item" href="javascript:">
            <i className="fa fa-instagram"></i> Instagram
          </a>
          <a className="dropdown-item" href="javascript:">
            <i className="fa fa-envelope-o"></i> Email
          </a>
        </span>
      </span>

      <a href="javascript:" className="btn btn-outline-white mb-2">
        <i className="fa fa-envelope-o"></i> Inbox
      </a>

      <a href="javascript:" className="btn btn-primary mb-2">
        <i className="fa fa-check"></i> Contact
      </a>

    </div>
  );
};

export default VendorActions;