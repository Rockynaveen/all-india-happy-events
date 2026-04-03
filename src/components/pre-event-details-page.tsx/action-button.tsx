const ActionButtons = () => {
    return (
        <div className="col-lg-6 text-lg-right mt-lg-0 mt-4">

            <a href="#" className="btn btn-outline-white mb-2">
                <i className="fa fa-heart-o"></i> Favorite
            </a>

            {/* Share Dropdown */}
            <span className="dropdown hover_out">
                <a
                    className="btn btn-outline-white mb-2 dropdown-toggle"
                    href="#"
                    role="button"
                >
                    <i className="fa fa-share-alt"></i> Share
                </a>

                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                        <i className="fa fa-facebook-f"></i> Facebook
                    </a>
                    <a className="dropdown-item" href="#">
                        <i className="fa fa-twitter"></i> Twitter
                    </a>
                    <a className="dropdown-item" href="#">
                        <i className="fa fa-instagram"></i> Instagram
                    </a>
                    <a className="dropdown-item" href="#">
                        <i className="fa fa-envelope-o"></i> Email
                    </a>
                </div>
            </span>

            <a href="#" className="btn btn-outline-white mb-2">
                <i className="fa fa-envelope-o"></i> Inbox
            </a>

            <a href="#" className="btn btn-primary mb-2">
                <i className="fa fa-check"></i> Contact
            </a>

        </div>
    );
};

export default ActionButtons;