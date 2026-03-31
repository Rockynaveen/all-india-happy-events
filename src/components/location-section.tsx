import LocationCard from "./location-card";
import { locations } from "../data/location-data";

export default function LocationsSection() {
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