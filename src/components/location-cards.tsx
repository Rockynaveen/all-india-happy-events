import LocationCard from "../components/location-card";

// ✅ Import images
import loc1 from "../assets/images/locations/location_1.jpg";
import loc2 from "../assets/images/locations/location_2.jpg";
import loc3 from "../assets/images/locations/loaction_3.jpg";
import loc4 from "../assets/images/locations/location_4.jpg";
import loc5 from "../assets/images/locations/location_5.jpg";
import loc6 from "../assets/images/locations/location_6.jpg";

export default function LocationsSection() {

  const locations = [
    { name: "Hyderabad", listings: "120+ Listings", image: loc1 },
    { name: "Vijayawada", listings: "95+ Listings", image: loc2 },
    { name: "Tirupati", listings: "150+ Listings", image: loc3 },
    { name: "Rajahmundry", listings: "80+ Listings", image: loc4 },
    { name: "Vizag", listings: "200+ Listings", image: loc5 },
    { name: "Warangal", listings: "110+ Listings", image: loc6 }
  ];

  return (
    <section className="wide-tb-120 bg-light-gray">
      <div className="container">

        <div className="section-title text-center">
          <h1>Popular Wedding Locations</h1>
          <p>
            Discover top wedding venues and vendors across India’s most loved cities
          </p>
        </div>

        <div className="row">
          {locations.map((loc, index) => (
            <LocationCard
              key={index}
              name={loc.name}
              listings={loc.listings}
              image={loc.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}