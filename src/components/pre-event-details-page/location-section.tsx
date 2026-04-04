// components/location/LocationSection.tsx

import LocationMap from "./Location-map";

const LocationSection = () => {
    return (
        <div className="card-shadow pos-rel">

            <a id="location" className="anchor-fake"></a>

            <div className="card-shadow-header">
                <h3>
                    <i className="fa fa-map-marker"></i> Location
                </h3>
            </div>

            <div className="card-shadow-body">
                <div id="map-holder">
                    <LocationMap />
                </div>
            </div>

        </div>
    );
};

export default LocationSection;