import React from "react";

// ✅ IMPORT CHILD COMPONENTS
import VendorTabs from "./vendor-tabs";
import VendorActions from "./vendor-actions";

// ✅ IMPORT DATA
import profileData from "../../data/pre-event-photographer/pre-event-details/profile-data";

// ✅ TYPES
type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const VendorProfile: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="vendor-profile-single">
      <div className="container pos-rel">

        {/* ✅ Tabs */}
        <VendorTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />

        <div className="row align-items-end">

          {/* LEFT */}
          <div className="col-lg-6 mb-0">
            <div className="profile-single">
              <h3>{profileData.name}</h3>

              <p>
                <i className="fa fa-map-marker"></i>{" "}
                {profileData.location}
              </p>

              <div className="reviews">
                <span className="badge">
                  <i className="fa fa-star-half-full"></i>{" "}
                  {profileData.rating}
                </span>{" "}
                {profileData.reviewsCount} Reviews
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <VendorActions />

        </div>

      </div>
    </div>
  );
};

export default VendorProfile;