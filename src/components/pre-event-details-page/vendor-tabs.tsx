import React from "react";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const VendorTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="vendor-tab-circle">
      <ul className="nav nav-pills">

        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "gallery" ? "active" : ""}`}
            onClick={() => setActiveTab("gallery")}
          >
            <i className="fa fa-image"></i>
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "slider" ? "active" : ""}`}
            onClick={() => setActiveTab("slider")}
          >
            <i className="fa fa-th-large"></i>
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "streetview" ? "active" : ""}`}
            onClick={() => setActiveTab("streetview")}
          >
            <i className="fa fa-street-view"></i>
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "video" ? "active" : ""}`}
            onClick={() => setActiveTab("video")}
          >
            <i className="fa fa-video-camera"></i>
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "map" ? "active" : ""}`}
            onClick={() => setActiveTab("map")}
          >
            <i className="fa fa-map-marker"></i>
          </button>
        </li>

      </ul>
    </div>
  );
};

export default VendorTabs; // ✅ VERY IMPORTANT