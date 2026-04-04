const Tabs = () => {
    return (
        <div className="vendor-tab-circle">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link" href="#pills-gallery">
                        <i className="fa fa-image"></i>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active" href="#pills-hr-grid">
                        <i className="fa fa-th-large"></i>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#pills-streetview">
                        <i className="fa fa-street-view"></i>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#pills-video">
                        <i className="fa fa-video-camera"></i>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#pills-map">
                        <i className="fa fa-map-marker"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Tabs;