import LocationCard from "./location-card";

import location1 from "../assets/images/locations/location_1.jpg";
import location2 from "../assets/images/locations/location_2.jpg";
import location3 from "../assets/images/locations/loaction_3.jpg";
import location4 from "../assets/images/locations/location_4.jpg";
import location5 from "../assets/images/locations/location_5.jpg";
import location6 from "../assets/images/locations/location_6.jpg";

const locations = [
    { name: "Hyderabad", listings: "120+ Listings", img: location1 },
    { name: "Vijayawada", listings: "95+ Listings", img: location2 },
    { name: "Tirupati", listings: "150+ Listings", img: location3 },
    { name: "Rajahmundry", listings: "80+ Listings", img: location4 },
    { name: "Vizag", listings: "200+ Listings", img: location5 },
    { name: "Warangal", listings: "110+ Listings", img: location6 }
];

const LocationCards = () => {
    return (
        <section className="wide-tb-120 bg-light-gray">
            <div className="container">

                <div className="section-title text-center">
                    <h1>Popular Wedding Locations</h1>
                    <p>Discover top wedding venues and vendors across India’s most loved cities</p>
                </div>

                <div className="row">
                    {locations.map((loc) => (
                        <div key={loc.name} className="col-md-6 col-lg-3 col-xl-4">
                            <LocationCard
                                name={loc.name}
                                listings={loc.listings}
                                img={loc.img}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LocationCards;