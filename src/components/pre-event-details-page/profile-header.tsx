import Tabs from "./tabs";
import ProfileInfo from "./profile-info";
import ActionButtons from "./action-button";

const VendorProfileHeader = () => {
    return (
        <div className="vendor-profile-single ">
            <div className="container pos-rel">

                {/* Tabs */}
                <Tabs />

                {/* Profile Row */}
                <div className="row align-items-end">
                    <ProfileInfo />
                    <ActionButtons />
                </div>

            </div>
        </div>
    );
};

export default VendorProfileHeader;