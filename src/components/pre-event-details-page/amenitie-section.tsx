import AmenityItem from "./amenitie-item";
<<<<<<< HEAD
import { amenitiesData } from "../../data/pre-event-photographer/pre-event-details/amenities-data";
=======
// import { amenitiesData } from "../../data/pre-event-photographer/pre-event-details/amenities-data";
>>>>>>> cb3e55f (final commit)

const AmenitiesSection = () => {
    return (
        <div className="card-shadow pos-rel">

            <a id="amenities" className="anchor-fake"></a>

            <div className="card-shadow-header">
                <h3>
                    <i className="fa fa-list"></i> Amenities
                </h3>
            </div>

            <div className="card-shadow-body">
                <div className="row">
                    {amenitiesData.map((item) => (
                        <AmenityItem key={item.id} item={item} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AmenitiesSection;